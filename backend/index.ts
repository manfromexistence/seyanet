const translatte = require('translatte');

translatte('Do you speak Russian?', {to: 'bn'}).then((res: { text: any; }) => {
    console.log(res.text);
}).catch((err: any) => {
    console.error(err);
});
