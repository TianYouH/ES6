// const data = [
//   {
//     id: 1,
//     pid: 'a',
//     text: 1,
//     children: [
//       {
//         id: 2,
//         pid: 'b',
//         text: 2,
//         children: [
//           {
//             id: 3,
//             pid: 'c',
//             text: 3,
//             children: [
//               {
//                 id: 4,
//                 pid: 'd',
//                 text: 3,
//                 children: []
//               },
//               {
//                 id: 5,
//                 pid: 'd2',
//                 text: 3,
//                 children: []
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];

const data = [
  {
      "authority": true,
      "children": [
          {
              "authority": true,
              "code": "eKrt3Xyuupr",
              "disabled": false,
              "label": "庄晨的测试组织",
              "level": 2,
              "noPermission": false,
              "parentCodes": [
                  "dir-1402"
              ],
              "remark": "",
              "showRemarkDisabled": false
          },
          {
              "authority": true,
              "code": "e75y3Z8kfdq",
              "disabled": false,
              "label": "庄晨的测试小组2",
              "level": 2,
              "noPermission": false,
              "parentCodes": [
                  "dir-1402"
              ],
              "remark": "",
              "showRemarkDisabled": false
          }
      ],
      "code": "dir-1402",
      "disabled": false,
      "label": "直属中心",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "children": [
          {
              "authority": true,
              "code": "p5Pc48kj6Fi",
              "disabled": false,
              "label": "122-c",
              "level": 2,
              "noPermission": false,
              "parentCodes": [
                  "1402.101"
              ],
              "remark": "",
              "showRemarkDisabled": false
          }
      ],
      "code": "1402.101",
      "disabled": false,
      "label": "122",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.104",
      "disabled": false,
      "label": "12333",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.105",
      "disabled": false,
      "label": "21312",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.102",
      "disabled": false,
      "label": "131333",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.103",
      "disabled": false,
      "label": "13213",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.110",
      "disabled": false,
      "label": "1231",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.109",
      "disabled": false,
      "label": "1",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.112",
      "disabled": false,
      "label": "测试",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.113",
      "disabled": false,
      "label": "测试124",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  },
  {
      "authority": true,
      "code": "1402.114",
      "disabled": false,
      "label": "213123",
      "level": 1,
      "noPermission": false,
      "parentCodes": [],
      "remark": "",
      "showRemarkDisabled": false
  }
]

function findIndexArray (data, code, indexArray) {
  let arr = Array.from(indexArray)
  for (let i = 0, len = data.length; i < len; i++) {
    arr.push(data[i].code)
    if (data[i].code === code) {
      return arr
    }
    let children = data[i].children
    if (children && children.length) {
      let result = findIndexArray(children, code, arr)
      if (result) return result
    }
    arr.pop()
  }
  return false
}

console.log(findIndexArray(data, "p5Pc48kj6Fi", [])) // [0, 0, 0]
