var isSubStructure = function (A, B) {
  if (A === null || B === null) return false;

  function dfs(A, B) {
    if (B == null) return true;
    if (A == null) return false;
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
  }

  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
