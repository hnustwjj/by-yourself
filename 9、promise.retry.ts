function myPromiseRetry(fetcher: () => Promise<any>, times: number) {
  return new Promise((resolve, reject) => {
    // 在这个函数里面执行fetcher
    // 如果成功了就直接调用resolve
    // 否则就多次重新调用该函数，重新执行fetcher，直到times为0
    function doFetcher() {
      fetcher().then(resolve, err => {
        if (times--) {
          doFetcher()
        } else {
          reject(err)
        }
      })
    }
    doFetcher() //别忘了执行一次这个函数
  })
}
