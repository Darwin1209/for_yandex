/* 
{ 
  title: "Регистрация",
  submit: "Зарегистрироваться",
  link: "registr.html",
  linkLabel: "Войти",
  fields: [
    { type: "text", name: "email", label: "Почта" },
    {
      type: "password",
      name: "password_two",
      label: "Пароль (ещё раз)",
      validation: 'text'
    },
  ],
}
*/

export const template: string = `
<h1 class="form-reg__title">{{context.title}}</h1>

{{#each context.fields}}
  <div class="form-reg__wrap-input">
    <label class="form-reg__title-input">{{this.label}}</label>
    <input
      type="{{this.type}}"
      name="{{this.name}}"
      class="form-reg__input form-reg__input_type-{{#if this.pass}}password{{else}}common{{/if}}"
      data-valid={{this.validation}}
      required
    />
    <label class="form-reg__valid-input">{{this.validText}}</label>
  </div>
{{/each}}
<button class="form-reg__submit">{{context.submit}}</button>
<a href="{{context.link}}" class="form-reg__link">{{context.linkLabel}}</a>
`
