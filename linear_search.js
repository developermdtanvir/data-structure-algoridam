const friends = ['SpiderMan', 'Batman', 'antMan'];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];

    if (element === 'antMan') {
        return i;
    }
}