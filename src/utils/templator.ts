import { Props } from '../modules/block'

//@ts-ignore
Handlebars.registerHelper('if_eq', function (a, b, opts) {
	if (a == b) {
		return opts.fn(this)
	} else {
		return opts.inverse(this)
	}
})

export const compile = (template: string, props: Props | undefined) => {
	//@ts-ignore
	const tmp = Handlebars.compile(template)
	return tmp(props)
}
