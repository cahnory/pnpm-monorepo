targetBranch=$1
targetRemote=$(git config branch.${targetBranch}.remote)
lastCommonCommit=$(git merge-base ${targetRemote}/${targetBranch} HEAD)

commitlint --from ${lastCommonCommit}
