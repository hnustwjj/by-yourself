function removeH(node) {
  node.innerHTML = node.innerHTML.replace(/<(h[1-6])>[\d\D]<\/\1>/g, "")
}
