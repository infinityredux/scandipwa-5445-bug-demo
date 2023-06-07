import { connect } from 'react-redux';

import {
    FooterContainer as SourceFooterContainer,
    mapDispatchToProps,
    mapStateToProps,
} from 'SourceComponent/Footer/Footer.container';

export {
    mapStateToProps,
    mapDispatchToProps,
};

/** @namespace Parent/Component/Footer/Container */
export class FooterContainer extends SourceFooterContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
