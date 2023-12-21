const chatHistoryTag = document.querySelector('#chatHistory');
const conferenceHistoryTag = document.querySelector('#conferenceHistory');

const videoHistoryList = [{name: 'Rhea Keith', timestamp: '12/03/2023 23:00:00', duration : 30},
    {name: 'Jane Parker', timestamp: '15/03/2023 13:00:00', duration : 30},
    {name: 'Shaun Mathews', timestamp: '19/03/2023 08:30:00', duration : 60},
    {name: 'James Thomas', timestamp: '20/03/2023 10:30:00', duration : 60}
];
const convoHistoryList = [{name: 'Laura Philips', timestamp: '15/03/2023 13:00:00', lastMessage: 'Hi Joseph, Can you please share your WA number', component:'RECEIVER'},
{name: 'Alex Carrey', timestamp: '19/03/2023 08:30:00', lastMessage:'Hi Alex, hope you have received the files!',component:'SENDER'},
{name: 'Ankit Roy', timestamp: '20/03/2023 10:30:00', lastMessage:'Ankit, Can we have a quick call?',component:'SENDER'}
];


for(let i=0;i<videoHistoryList.length;++i){
    const data = videoHistoryList[i];
    const videoTile = document.createElement('li');
    const headerTag = document.createElement('div'), nameHead = document.createElement('p'), avatarHead = document.createElement('img');
    const name = document.createTextNode(data.name);

    nameHead.append(name);
    avatarHead.setAttribute('src',`../images/Profile Pics/profPic${i+1}.jpg`);
    avatarHead.classList.add('avatars');

    headerTag.appendChild(avatarHead);
    headerTag.appendChild(nameHead);
    headerTag.classList.add('headerTag');

    const thumbnail = document.createElement('img');
    thumbnail.setAttribute('src',`../images/sprites/virtual-meeting${i+1}.jpg`);
    thumbnail.classList.add('thumbnail');

    const textMessage1 = document.createElement('p');
    const textMessage2 = document.createElement('p');
    const textNode1 = document.createTextNode(`Meeting on ${data.timestamp.split(' ')[0].replaceAll('/','-')}`);
    const textNode2 = document.createTextNode(`Meeting lasted for ${data.duration} minutes.`);

    textMessage1.append(textNode1);
    textMessage2.append(textNode2);
    textMessage1.classList.add('textMessage');
    textMessage2.classList.add('textMessage');
    textMessage2.style.color='#ACACAC';

    textMessage2.style.fontSize='12px';

    videoTile.appendChild(headerTag);
    videoTile.appendChild(thumbnail);
    videoTile.appendChild(textMessage1);
    videoTile.appendChild(textMessage2);

    videoTile.classList.add('videoTile');

    conferenceHistoryTag.appendChild(videoTile);
}

for(let i=0;i<convoHistoryList.length;++i){
    const data = convoHistoryList[i];
    const chatTile = document.createElement('li');
    const headerTag = document.createElement('div'), nameHead = document.createElement('p'), avatarHead = document.createElement('img');
    const name = document.createTextNode(data.name);

    nameHead.append(name);
    avatarHead.setAttribute('src',`../images/Profile Pics/profPic${i+1}.jpg`);
    avatarHead.classList.add('avatars');

    headerTag.appendChild(avatarHead);
    headerTag.appendChild(nameHead);
    headerTag.classList.add('headerTag');

    const textMessage1 = document.createElement('p');
    const textMessage2 = document.createElement('p');
    const prefixText = (data.component === 'SENDER') ? 'You: ' : `${data.name}: `;
    const textNode1 = document.createTextNode(`${prefixText}${data.lastMessage}`);
    const textNode2 = document.createTextNode(`Last seen on ${data.timestamp}.`);

    textMessage1.append(textNode1);
    textMessage2.append(textNode2);
    textMessage1.classList.add('chatMessage');
    textMessage2.classList.add('chatMessage');

    textMessage2.style.color='#ACACAC';
    textMessage2.style.fontSize='12px';
    textMessage2.style.marginTop='2px';
    
    chatTile.appendChild(headerTag);
    chatTile.appendChild(textMessage2);
    chatTile.appendChild(textMessage1);

    chatTile.classList.add('chatTile');
    chatHistoryTag.append(chatTile);
}