document.getElementById('btn_export').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'export' }, (content) => {
            document.getElementById('title').value = content;
        });
    });
});

document.getElementById('btn_import').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        state_json = document.getElementById('title').value;
        chrome.tabs.sendMessage(tabs[0].id, { message: 'import', state_json: state_json }, () => { });
    });
});
