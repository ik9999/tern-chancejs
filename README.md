# tern-chancejs
A Tern plugin adding [Chance.js](https://github.com/victorquinn/chancejs) support.

[Npm package](https://www.npmjs.com/package/tern-chancejs)

![tern-chancejs screenshot](https://cloud.githubusercontent.com/assets/6804575/11226178/54adad7e-8d8f-11e5-83a8-63b3b7f71a91.png "tern-chancejs screenshot")

### Currently supported functions:
bool
character
floating
integer
natural
string
paragraph
sentence
syllable
word
guid
hash
unique

### Installation with [tern_for_vim](https://github.com/ternjs/tern_for_vim)
1. Go to your tern_for_vim directory
```
cd ~/.vim/bundle/tern_for_vim
```

3. Install tern-chancejs
```
npm install tern-chancejs
```
4. Put
```
{
  ...
  "plugins": {
    ...
    "chancejs": {},
    ...
  }
  ...
}
```
into your project's .tern-project file(to plugins section).
