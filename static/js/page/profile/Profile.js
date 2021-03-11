import Block from '../../modules/block.js';
import ProfileComp from '../../components/profileComp/index.js';
import { renderChildren } from '../../utils/renderChildren.js';
import { fields } from './mock.js';
export default class Profile extends Block {
    constructor() {
        super('main', {
            components: [
                new ProfileComp({
                    context: {
                        profile: true,
                        changeAvatar: false,
                        fields,
                    },
                }),
            ],
        });
    }
    componentDidRender() {
        renderChildren(this.element, this.props.components);
    }
}
//# sourceMappingURL=Profile.js.map