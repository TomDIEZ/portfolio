function changeTab(selectedTab) {
    const tabs = document.getElementsByClassName('tab')[0].getElementsByTagName('button');
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].className = '';
    }
    document.getElementById(selectedTab.replace('content', 'tab')).className = 'active';

    const contents = document.getElementsByClassName('content');
    for(let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(selectedTab).style.display = 'block';
}

window.onload = function() {
    changeTab('content1');
}
