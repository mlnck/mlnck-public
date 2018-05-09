let refreshStudentList = document.getElementById('refreshStudentList');

refreshStudentList.onclick = function(element) { refreshPopup(); };
refreshPopup = () =>
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // console.log('tabs:',tabs);
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'gatherStudents();'});
  });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      chrome.storage.sync.set({students:request})
      sendResponse({handoff: "successful"});
    setStudentStatusView(request);
  });

const setStudentStatusView = (req) =>
{
  const activeList = document.getElementById('active-student-list'),
        inactiveList = document.getElementById('inactive-student-list');
  activeList.innerHTML = ''
  inactiveList.innerHTML = ''

  for(let k in req)
  {
    let curList = (req[k].online) ? activeList : inactiveList,
        curCheck = (req[k].completed) ? 'checked="checked"' : '',
        curName = k.toLowerCase().replace(/\W/g,'');
    const liTemplate = (`<li data-ref="${k}" data-val="${req[k].completed}">
                            <input id="${curName}" type="checkbox" name="${curName}" value="${k}"${curCheck} />
                            <label for="${curName}">${k}</label>
                        </li>`)
    curList.innerHTML += liTemplate
  }

  resetStudentListeners();

// console.log('req:',req);
}

const resetStudentListeners = () =>
{
  const lis = document.querySelectorAll('li')
  lis.forEach(itm => {
    return itm.onclick = function(element) {
      return updateStudent(element);
    }
  })
}

const updateStudent = (student) => {
  const curStudent = student.currentTarget.getAttribute('data-ref');
    let curValue = (student.currentTarget.getAttribute('data-val') === 'true') ? false : true;
    student.currentTarget.setAttribute('data-val',curValue)

  chrome.storage.sync.get((obj) =>
  {
    let updatedObj = {...obj.students};
    updatedObj[curStudent].completed = curValue
    chrome.storage.sync.set({students:updatedObj})

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, updatedObj, function(response) {
        // console.log('updatedObj:',updatedObj);
        // console.log('response',response);
      });
    });
  })
};

(function(){ refreshPopup() })()
