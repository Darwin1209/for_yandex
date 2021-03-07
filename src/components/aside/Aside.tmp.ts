export const template: string = `
<div class="wrap-link">
  <a class="link link_profile" href="profile.html">Профиль</a>
</div>
<form class="form form-search">
  <div class="wrapper-input-search">
    <div class="input-img"></div>
  </div>
  <input type="text" class="form-search__input" placeholder="Поиск" />
</form>
<ul class="chats-list">
{{#each list}}
  <li class="chats-list__item">
  <div class="chat">
    <div class="chat__wrap-img">
      <img class="chat__img" />
    </div>
    <div>
      <p class="chat__name">{{this.name}}</p>
      <p class="chat__message">{{this.message}}</p>
    </div>
    <div class="chat__wrap-date">
      <div class="chat__date">{{this.date}}</div>
      <div class="chat__count">{{this.count}}</div>
    </div>
  </div>
  </li>
{{/each}}
  
</ul>
`
