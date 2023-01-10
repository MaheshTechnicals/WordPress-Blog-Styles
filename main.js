let subscount = document.querySelector("#subscount")
const user = "UCnaXfsmRmrdc5IprzOok43Q"
const api = `AIzaSyAKJEP4Q19B7E0To3BwItSNDhYVooYf6Fo`



getsubs = () => {

  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${user}&key=${api}`)
    .then((res) => {
      return res.json()
    })

    .then((data) => {
     let subs =data.items[0].statistics.subscriberCount

  subscount.innerText =subs
    })

    .catch((error) => {
      console.log(error)
    })

}


getsubs()