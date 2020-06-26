const isMe = function (selfId, otherId) {
  return selfId === otherId
}

const getOther = function (selfId, arr) {
  return arr.find((x) => {
    return !isMe(selfId, x._id)
  })
}

const getUser = function (id, arr) {
  console.log(id)
  console.log(arr)
  return arr.find((x) => {
    return isMe(id, x._id)
  })
}

export default {
  methods: {
    isMe,
    getOther,
    getUser
  }
}
