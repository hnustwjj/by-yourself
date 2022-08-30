const raw = [
        {
          name: 'sku',
          required: true,
          formItem: {
            label: '商品',
            isHorizontal: true,
          },
          component: {
            is: "SkuSelect",
          },
        },
        {
          name: 'modifyTime',
          required: true,
          formItem: {
            label: '修改时间',
            isHorizontal: true,
          },
          component: {
            is: "ModifyTime",
          },
          validation(val: any[]) {
            if (!val?.length) {
              return Promise.reject('必填项')
            }
            if (!val[0].start || !val[0].end) {
              return Promise.reject('必填项')
            }
            const valid = val?.every(item => {
              if (item.start && item.end) {
                return true
              }
              if (item.start || item.end) {
                return false
              }
              return true
            })
            if (!valid) {
              return Promise.reject('必填项')
            }
            return Promise.resolve()
          },
        },
        {
          name: 'stock',
          required: true,
          formItem: {
            label: '库存',
            isHorizontal: true,
          },
          component: {
            is: "ChangeStock",
          },
        },
]


type GetName<T extends any[],R = {}> = 
 T extends [infer F,...infer Rest]
  ? GetName<Rest, R & {[k in keyof F & 'name'] : F[k]}>
  : R

type test = [
  {
    name:'1'
  }
]
type res = GetName<typeof raw>


export {}