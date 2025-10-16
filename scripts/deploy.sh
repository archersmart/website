#!/usr/bin/env bash
set -euo pipefail

# 简介：将 Vite 构建产物 dist 推送到 GitHub Pages 仓库
# 目标：git@github.com:archersmart/archersmart.github.io.git 的 main 分支（用户/组织页）

# 可配置环境变量（如需覆盖默认值）：
#   DEPLOY_REPO       目标仓库（默认：git@github.com:archersmart/archersmart.github.io.git）
#   DEPLOY_BRANCH     分支（默认：main）
#   DIST_DIR          构建输出目录（默认：dist）
#   DEPLOY_WORK_DIR   本地工作目录（默认：.deploy-pages）
#   SKIP_BUILD        是否跳过构建（设置为 1 则跳过）

REPO=${DEPLOY_REPO:-git@github.com:archersmart/archersmart.github.io.git}
BRANCH=${DEPLOY_BRANCH:-main}
DIST_DIR=${DIST_DIR:-dist}
WORK_DIR=${DEPLOY_WORK_DIR:-.deploy-pages}

echo "[deploy] 目标仓库: $REPO"
echo "[deploy] 目标分支: $BRANCH"
echo "[deploy] 构建目录: $DIST_DIR"
echo "[deploy] 工作目录: $WORK_DIR"

rm -rf "$WORK_DIR"

if [[ "${SKIP_BUILD:-0}" != "1" ]]; then
  echo "[deploy] 执行构建: npm run build"
  npm run build
else
  echo "[deploy] 跳过构建 (SKIP_BUILD=1)"
fi

if [[ ! -d "$DIST_DIR" ]]; then
  echo "[deploy] 构建目录不存在: $DIST_DIR" >&2
  exit 1
fi

# 准备工作目录：克隆或重置到远端最新
if [[ -d "$WORK_DIR/.git" ]]; then
  echo "[deploy] 检测到已有工作目录，检查远端 URL 与分支"
  ORIGIN_URL=$(git -C "$WORK_DIR" remote get-url origin || echo "")
  if [[ "$ORIGIN_URL" != "$REPO" ]]; then
    echo "[deploy] 远端不匹配，移除旧目录后重新克隆"
    rm -rf "$WORK_DIR"
    git clone --depth=1 -b "$BRANCH" "$REPO" "$WORK_DIR"
  else
    echo "[deploy] 拉取远端最新提交"
    git -C "$WORK_DIR" fetch --depth=1 origin "$BRANCH"
    if ! git -C "$WORK_DIR" rev-parse --verify "$BRANCH" >/dev/null 2>&1; then
      git -C "$WORK_DIR" checkout -b "$BRANCH" "origin/$BRANCH"
    else
      git -C "$WORK_DIR" checkout "$BRANCH"
    fi
    git -C "$WORK_DIR" reset --hard "origin/$BRANCH"
  fi
else
  echo "[deploy] 克隆目标仓库到工作目录"
  git clone -b "$BRANCH" "$REPO" "$WORK_DIR" || {
    echo "[deploy] 远端不存在分支 $BRANCH，尝试默认克隆后创建分支"
    git clone "$REPO" "$WORK_DIR"
    git -C "$WORK_DIR" checkout --orphan "$BRANCH" || true
  }
fi

# 同步 dist 内容到工作目录（移除旧文件并更新）
echo "[deploy] 同步 dist -> $WORK_DIR"
# 删除工作目录除 .git 外的所有文件
find "$WORK_DIR" -mindepth 1 -not -path "$WORK_DIR/.git" -not -path "$WORK_DIR/.git/*" -exec rm -rf {} +
cp -R "$DIST_DIR/"* "$WORK_DIR/"

# 提交并推送
echo "[deploy] 准备提交变更"
git -C "$WORK_DIR" add -A
if [[ -z "$(git -C "$WORK_DIR" status --porcelain)" ]]; then
  echo "[deploy] 没有需要部署的变更"
else
  # 确保配置提交用户（只在本地工作目录生效，避免全局未配置导致提交失败）
  if ! git -C "$WORK_DIR" config --get user.name >/dev/null; then
    git -C "$WORK_DIR" config user.name "deploy"
  fi
  if ! git -C "$WORK_DIR" config --get user.email >/dev/null; then
    git -C "$WORK_DIR" config user.email "deploy@local"
  fi

  COMMIT_MSG="Deploy $(date -u '+%Y-%m-%d %H:%M:%S %Z')"
  echo "[deploy] 提交: $COMMIT_MSG"
  git -C "$WORK_DIR" commit -m "$COMMIT_MSG"
  # 确保存在并指向正确的远端 origin
  if git -C "$WORK_DIR" remote | grep -q "^origin$"; then
    git -C "$WORK_DIR" remote set-url origin "$REPO"
  else
    git -C "$WORK_DIR" remote add origin "$REPO"
  fi
  # 确保当前分支为目标分支
  git -C "$WORK_DIR" checkout -B "$BRANCH"

  echo "[deploy] 推送到 $REPO $BRANCH"
  git -C "$WORK_DIR" push -u origin "$BRANCH"
  echo "[deploy] 部署完成 ✅"
fi