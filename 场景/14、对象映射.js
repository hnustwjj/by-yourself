const obj = {
  data: [
    ["xiaoming", "male", "18", "beijing", "2020-01-02"],
    ["xiaofang", "female", "18", "shanghai", "2020-03-02"],
  ],
  columns: [
    { name: "name", note: "" },
    { name: "gender", note: "" },
    { name: "age", note: "" },
    { name: "address", note: "" },
    { name: "registerTime", note: "" },
  ],
}
/*
[
  {
    name: 'xiaoming',
    gender: 'male',
    age: '18',
    address: 'beijing',
    registerTime: '2020-01-02'
  },
  {
    name: 'xiaofang',
    gender: 'female',
    age: '18',
    address: 'shanghai',
    registerTime: '2020-03-02'
  }
]
*/

function map(arr1, arr2) {
  return arr1.map(values => {
    const obj = {}
    values.forEach((value, index) => {
      obj[arr2[index].name] = value
    })
    return obj
  })
}
console.log(map(obj.data, obj.columns))
