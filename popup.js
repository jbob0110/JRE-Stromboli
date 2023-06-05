var jiraKey;
var project;
var jiraInstance;
var url;
var description;
var gComp;
var gAsset;
var gAlignTeam;
// asyncRequestCount keeps track of when the sub-tasks and labels are being sent.
var asyncRequestCount = 0;
/**This if checks the users browser and grabs their browser information based on this.*/
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  url = tabs[0].url;
  getURLs(url);
  chrome.scripting.executeScript({
    target: {tabId: tabs[0].id},
  })
});
console.log(jiraKey);
console.log(project);
console.log(jiraInstance);

function getValues(){
  return {
    component: document.getElementById('components-val').innerText,
    asset: document.getElementById('customfield_22100-val').innerText,
    alignTeam: document.getElementById('customfield_22101-val').innerText,
  }
};

window.onload = () => {
  document.getElementById('jANDR').onclick = () => {
    document.getElementById('loader').style.display = "block";
         
    addSubTask(
      {"fields":{  
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Requirements",
        "description":"h2. Overview\n\n Work with strategists, stakeholders and the development team to define requirements for this project. Once ready for review, add_Web Links_to this sub-task linking out to the requirements and request reviewers by @mentioning them. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n # Define the requirements for the story\n # Add a_Web Link_to this sub-task to the completed requirements for review.\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and requirements have been finalized",
        "issuetype":{ "name":"Sub-task"},
        "assignee":{ "name":"BC016019"},
        }
      }
    );
    console.log("Requirements Sent");
    
    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Test Case",
        "description":"h2. Overview\n\n Identify any test case scenarios which need to be modified or created for this project. Once you've finished making your changes, add_Web Links_to each test case, request reviewers by @mentioning them, and update the status of this sub-task to{_}In Review{_}. As reviewers provide comments make updates to the test cases. Once all changes have been finalized, close this sub-task.\n {panel} If there are existing test cases which already cover the functionality of this project, add_Web Links_to each of those test cases and comment which specific test case apply to the project.{panel}\n h2. Acceptance Criteria\n\n # Identify test cases which need to be modified or created\n # Add_Web Links_to each test case that is being updated\n ** If no updates were necessary, add_Web Links_to the existing test cases which cover the functionality of this project\n # Comment which test cases apply for the project\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and the test case have been finalized\n ** If no updates were necessary, reviewers will be giving a +1 that all functionality is covered in the existing pages",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Test Case Sent");
  };
  
  document.getElementById('jVIDEO').onclick = () => {
    document.getElementById('loader').style.display = "block";
    
    addSubTask(
      {"fields":{  
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Requirements",
        "description":"h2. Overview\n\n Work with strategists, stakeholders and the development team to define requirements for this project. Once ready for review, add_Web Links_to this sub-task linking out to the requirements and request reviewers by @mentioning them. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n # Define the requirements for the story\n # Add a_Web Link_to this sub-task to the completed requirements for review.\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and requirements have been finalized",
        "issuetype":{  "name":"Sub-task"},
        "assignee":{ "name":"BC016019"},
        }
      }
    );
    console.log("Requirements Sent");
    
    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Test Case",
        "description":"h2. Overview\n\n Identify any test case scenarios which need to be modified or created for this project. Once you've finished making your changes, add_Web Links_to each test case, request reviewers by @mentioning them, and update the status of this sub-task to{_}In Review{_}. As reviewers provide comments make updates to the test cases. Once all changes have been finalized, close this sub-task.\n {panel} If there are existing test cases which already cover the functionality of this project, add_Web Links_to each of those test cases and comment which specific test case apply to the project.{panel}\n h2. Acceptance Criteria\n\n # Identify test cases which need to be modified or created\n # Add_Web Links_to each test case that is being updated\n ** If no updates were necessary, add_Web Links_to the existing test cases which cover the functionality of this project\n # Comment which test cases apply for the project\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and the test case have been finalized\n ** If no updates were necessary, reviewers will be giving a +1 that all functionality is covered in the existing pages",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Test Case Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Technical Design",
        "description":"h2. Overview\n\n Create a technical design document outlining your proposed changes for this story. Once completed, submit a pull request to the correct repository and add a_Web Link_to it in this sub-task. Once posted for review, update the status of the sub-task to{_}In Review{_}. Once all reviews are completed and the technical design document has been finalized, close the sub-task.\n h2. Acceptance Criteria\n\n # Write the technical design document outlining your proposed changes\n # Create a pull request in the necessary repository and add a_Web Link_to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n # Close the sub-task once all reviewers have completed their reviews and the technical design document has been finalized",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Technical Design Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Code Review",
        "description":"h2. Overview\n\n As you work through the implementation of this project, create code reviews for any artifacts you've made modifications to. Reviews can be held in either Crucible or GitHub and should be linked to from this sub-task using a{_}Web Link{_}. If you are making updates to multiple artifacts, @mention associates you would like to review your work so they have visibility to all changes being made. Once you've posted code for review, update the status of this sub-task to{_}In Review{_}. Once you've made all necessary changes and closed/merged your reviews, close the sub-task.\n h2. Acceptance Criteria\n\n # Implement the change needed for the Story / Defect\n # Create code reviews and pull requests so others can review your work\n # Update the status of this sub-task to_In Review_\n # Address comments as they are provided and post additional commits as necessary\n # Close / Merge reviews as they are completed\n # Close this sub-task once all reviews are completed",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Code Review Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Gray Box",
        "description":"h2. Overview\n\n Update or create new gray box tests which cover the changes being made in this story. If time permits, perform additional gray box testing on existing scenarios which are not covered. Once you've completed gray box testing, create a pull request to review the updates and add a_Web Link_to it in this sub-task. Be sure to attach evidence of a successful gray box test run. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n\n # Write the gray box tests which cover the changes being made in this story\n # Create a pull request in the necessary repository and add a_Web Link_to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n ## Gray box evidence is attached to the this sub-task?\n # Close the sub-task",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Gray Box Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Eggplant",
        "description":"h2. Overview\n\n Update or create new eggplant tests which cover the changes being made in this story. If time permits, perform additional eggplant testing on existing scenarios which are not covered. Once you've completed eggplant testing, create a pull request to review the updates and add a_Web Link_to it in this sub-task. Be sure to attach evidence of a successful eggplant test run. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n\n # Write the eggplant tests which cover the changes being made in this story\n # Create a pull request in the necessary repository and add a _Web Link_ to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n ## Eggplant evidence is attached to the this sub-task?\n # Close the sub-task",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Eggplant Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Tech Verifies / Unscripted Testing",
        "description":"h2. Overview\n\n Once the code for a project has reached a location where tech verifies can be performed, update the status of this sub-task to{_}In Progress{_}. Run any tech verifies necessary to cover the modifications made in this Story / Defect. It is the responsibility of the Engineer to setup a location where their changes can be easily tested by other associates. Once setup is complete, details on how to access the testing environment should be provided in this sub-task. When you are ready for tech verifies to begin, @mention the associates you would like to assist you with testing. If an issue is discovered, update the status of the sub-task to 'Blocked' and document the issue in the comments providing details on how to recreate it. Any issues identified should be addressed by creating a new Story to correct the issue. Once all testers have completed their tech verifies, they should leave a +1 comment on this sub-task to signify that they were able to test successfully.\n h2. Acceptance Criteria\n\n # Update the status of this sub-task to_In Progress_\n # Setup a location where testing can take place\n # Detail any information needed by testers in this sub-task\n # Address issues as they are discovered by testers\n # Close the sub-task once all tech verifies testers have given their +1",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Tech Verifies / Unscripted Testing");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Release Notes",
        "description":"*Please update this JIRA description with the needed release note information*\n\n *Component:*(video_visits) Scheduled Video Visit\n *Solution Change: 1-000000390070*\n *Description:* Ensure that device/browser combinations that support the audio output selection, changing of that selection is correctly reflected in the sound output. Previously, the audio output selection was not retained.\n *Reference Material:*\n *Validation Guidelines:* Enter workflow-based or testing option validation guidelines using the text below.\n\n *Implementation Impact:* None\n *Maintenance Impact:* None\n *User Interface Impact:* None\n *Is this change a Release Highlight:* No",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Release Notes");
  };

  document.getElementById('jSmartZone').onclick = () => {
    document.getElementById('loader').style.display = "block";

    addSubTask(
      {"fields":{  
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Requirements",
        "description":"h2. Overview\n\n Work with strategists, stakeholders and the development team to define requirements for this project. Once ready for review, add_Web Links_to this sub-task linking out to the requirements and request reviewers by @mentioning them. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n # Define the requirements for the story\n # Add a_Web Link_to this sub-task to the completed requirements for review.\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and requirements have been finalized",
        "issuetype":{  "name":"Sub-task"},
        "assignee":{ "name":"BC016019"},
        }
      }
    );
    console.log("Requirements Sent");
    
    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Test Case",
        "description":"h2. Overview\n\n Identify any test case scenarios which need to be modified or created for this project. Once you've finished making your changes, add_Web Links_to each test case, request reviewers by @mentioning them, and update the status of this sub-task to{_}In Review{_}. As reviewers provide comments make updates to the test cases. Once all changes have been finalized, close this sub-task.\n {panel} If there are existing test cases which already cover the functionality of this project, add_Web Links_to each of those test cases and comment which specific test case apply to the project.{panel}\n h2. Acceptance Criteria\n\n # Identify test cases which need to be modified or created\n # Add_Web Links_to each test case that is being updated\n ** If no updates were necessary, add_Web Links_to the existing test cases which cover the functionality of this project\n # Comment which test cases apply for the project\n # Address comments as they are provided by reviewers\n # Close the sub-task once reviewers have given their +1 and the test case have been finalized\n ** If no updates were necessary, reviewers will be giving a +1 that all functionality is covered in the existing pages",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Test Case Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Technical Design",
        "description":"h2. Overview\n\n Create a technical design document outlining your proposed changes for this story. Once completed, submit a pull request to the correct repository and add a_Web Link_to it in this sub-task. Once posted for review, update the status of the sub-task to{_}In Review{_}. Once all reviews are completed and the technical design document has been finalized, close the sub-task.\n h2. Acceptance Criteria\n\n # Write the technical design document outlining your proposed changes\n # Create a pull request in the necessary repository and add a_Web Link_to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n # Close the sub-task once all reviewers have completed their reviews and the technical design document has been finalized",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Technical Design Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Code Review",
        "description":"h2. Overview\n\n As you work through the implementation of this project, create code reviews for any artifacts you've made modifications to. Reviews can be held in either Crucible or GitHub and should be linked to from this sub-task using a{_}Web Link{_}. If you are making updates to multiple artifacts, @mention associates you would like to review your work so they have visibility to all changes being made. Once you've posted code for review, update the status of this sub-task to{_}In Review{_}. Once you've made all necessary changes and closed/merged your reviews, close the sub-task.\n h2. Acceptance Criteria\n\n # Implement the change needed for the Story / Defect\n # Create code reviews and pull requests so others can review your work\n # Update the status of this sub-task to_In Review_\n # Address comments as they are provided and post additional commits as necessary\n # Close / Merge reviews as they are completed\n # Close this sub-task once all reviews are completed",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Code Review Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Gray Box",
        "description":"h2. Overview\n\n Update or create new gray box tests which cover the changes being made in this story. If time permits, perform additional gray box testing on existing scenarios which are not covered. Once you've completed gray box testing, create a pull request to review the updates and add a_Web Link_to it in this sub-task. Be sure to attach evidence of a successful gray box test run. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n\n # Write the gray box tests which cover the changes being made in this story\n # Create a pull request in the necessary repository and add a_Web Link_to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n ## Gray box evidence is attached to the this sub-task?\n # Close the sub-task",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Gray Box Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Eggplant",
        "description":"h2. Overview\n\n Update or create new eggplant tests which cover the changes being made in this story. If time permits, perform additional eggplant testing on existing scenarios which are not covered. Once you've completed eggplant testing, create a pull request to review the updates and add a_Web Link_to it in this sub-task. Be sure to attach evidence of a successful eggplant test run. Once posted for review update the status of the sub-task to{_}In Review{_}.\n h2. Acceptance Criteria\n\n # Write the eggplant tests which cover the changes being made in this story\n # Create a pull request in the necessary repository and add a _Web Link_ to it in this sub-task\n # Address comments as they are provided by reviewers\n # Merge your pull request\n ## Eggplant evidence is attached to the this sub-task?\n # Close the sub-task",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Eggplant Sent");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Tech Verifies / Unscripted Testing",
        "description":"h2. Overview\n\n Once the code for a project has reached a location where tech verifies can be performed, update the status of this sub-task to{_}In Progress{_}. Run any tech verifies necessary to cover the modifications made in this Story / Defect. It is the responsibility of the Engineer to setup a location where their changes can be easily tested by other associates. Once setup is complete, details on how to access the testing environment should be provided in this sub-task. When you are ready for tech verifies to begin, @mention the associates you would like to assist you with testing. If an issue is discovered, update the status of the sub-task to 'Blocked' and document the issue in the comments providing details on how to recreate it. Any issues identified should be addressed by creating a new Story to correct the issue. Once all testers have completed their tech verifies, they should leave a +1 comment on this sub-task to signify that they were able to test successfully.\n h2. Acceptance Criteria\n\n # Update the status of this sub-task to_In Progress_\n # Setup a location where testing can take place\n # Detail any information needed by testers in this sub-task\n # Address issues as they are discovered by testers\n # Close the sub-task once all tech verifies testers have given their +1",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Tech Verifies / Unscripted Testing");

    addSubTask(
      {"fields":{
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Release Notes",
        "description":"*Please update this JIRA description with the needed release note information*\n\n *Component:*(video_visits) Scheduled Video Visit\n *Solution Change: 1-000000390070*\n *Description:* Ensure that device/browser combinations that support the audio output selection, changing of that selection is correctly reflected in the sound output. Previously, the audio output selection was not retained.\n *Reference Material:*\n *Validation Guidelines:* Enter workflow-based or testing option validation guidelines using the text below.\n\n *Implementation Impact:* None\n *Maintenance Impact:* None\n *User Interface Impact:* None\n *Is this change a Release Highlight:* No",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Release Notes");
  };

  document.getElementById('jRootCause').onclick = () => {
    document.getElementById('loader').style.display = "block";

    addSubTask(
      {"fields":{  
        "project":{  "key": project },
        "parent":{ "key": jiraKey},
        "summary":"Root Cause",
        "description":"h2. Overview\n\n Perform the root cause analysis for this Solution Change.\n {panel}If your story is not a defect you can close this sub-task as{_}Not Applicable{_}.{panel}\n h2. Acceptance Criteria\n\n # Fill out the fields listed below on the parent JIRA issue.\n ** Root Cause Classification\n ** Root Cause Comment\n ** Preventative Action Type\n ** Preventative Action Type Comment\n # Identify the project which introduced this issue and add an_Introduced By_link on the parent issue. When linking, the Solution Change field should be the JIRA key (IONVIDEO-XXX). If a JIRA key is not available the Solution Change number can be used. If you cannot locate either, then set the_Latent Defect_field to yes in the parent issue.\n # Close the sub-task",
        "issuetype":{  "name":"Sub-task"},
        }
      }
    );
    console.log("Root Cause");
  };
};

function addSubTask(subtask){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "https://"+jiraInstance+".cerner.com/rest/api/2/issue/");
  xhr.setRequestHeader("Content-Type","application/json","Access-Control-Allow-Origin");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      asyncRequestCount--;
      checkAsynRequestCount();
    }
  };
  asyncRequestCount++;
  xhr.send(JSON.stringify(subtask));
};

function getURLs(url){
  var re = /https\:\/\/(.+?)\..+\/((.+?)\-[^\?]+)/;
  var regexGroups = { jIns: 1, jKey: 2, pKey: 3 };
  var m = re.exec(url);
  jiraKey = m[regexGroups.jKey];
  project = m[regexGroups.pKey];
  jiraInstance = m[regexGroups.jIns];
};

/** This function checks if the asyncRequestCount is 0 then will reload the page, and hide the loading spinner*/
function checkAsynRequestCount(){
  if(asyncRequestCount === 0){
    chrome.tabs.reload();
    document.getElementById('loader').style.display = "none";
  }
}