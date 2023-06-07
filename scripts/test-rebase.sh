targetBranch=$1
targetRemote=$(git config branch.${targetBranch}.remote)
currentBranch=$(git rev-parse --abbrev-ref HEAD)

git fetch ${targetRemote} ${targetBranch} > /dev/null 2>&1

targetLastCommit=$(git rev-parse ${targetRemote}/${targetBranch})
lastCommonCommit=$(git merge-base ${targetRemote}/${targetBranch} HEAD)

if [ "${targetLastCommit}" = "${lastCommonCommit}" ] ;
then
  echo "✅ Current branch \"${currentBranch}\" is up to date with remote branch \"${targetRemote} ${targetBranch}\"\n"
  exit 0
else
  echo "❌ Current branch \"${currentBranch}\" is not up to date with remote branch \"${targetRemote} ${targetBranch}\""
  echo "   fix this by running \`git pull --rebase ${targetRemote} ${targetBranch}\`\n"
  exit 1
fi
