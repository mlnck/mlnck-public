// Copyright 2018 mlnck. All rights reserved.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
      //system-message
    });
    chrome.storage.sync.set({students:[]}, function(){ console.log('cleared all users to default');})
    chrome.storage.sync.set({latestTimestamp:''}, function(){ console.log('latest timestamp is reset');})
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'sessions.thinkful.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
