import {Device} from '@scandipwa/scandipwa/src/type/Device.type';

import {
    FooterContainerFunctions,
    FooterContainerMapDispatchProps,
    FooterContainerMapStateProps,
    FooterContainerProps,
    FooterContainerPropsKeys as SourceFooterContainerPropsKeys,
    FooterRenderColumn,
    FooterRenderColumnItem,
} from 'SourceComponent/Footer/Footer.type';

export type {
    FooterContainerMapStateProps,
    FooterContainerMapDispatchProps,
    FooterContainerFunctions,
    FooterContainerProps,
    FooterRenderColumn,
    FooterRenderColumnItem,
};

declare module 'SourceComponent/Footer/Footer.type' {
    export interface FooterComponentProps {
        copyright: string;
        isVisibleOnMobile: boolean;
        device: Device;
        newsletterActive: boolean;
        onItemClick: () => void;
    }
}

// TODO: extend type FooterContainerPropsKeys
export type FooterContainerPropsKeys = SourceFooterContainerPropsKeys;
