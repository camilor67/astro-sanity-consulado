export interface Action {
    _type?: string;
    label: string;
    url?: string;
    ariaLabel?: string;
}

export interface ActionButton extends Action {
    theme?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

export interface ActionLink extends Action {}

export interface BackgroundImage {
    image?: CustomImage;
    opacity?: number;
}

export interface Badge {
    label: string;
    theme?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

export interface Card {
    badge?: Badge;
    heading?: string;
    body?: string;
    cta?: Array<ActionButton | ActionLink>;
    image?: CustomImage;
    theme?: 'light' | 'dark' | 'transparent';
    textAlign?: 'left' | 'center';
    hasBorder?: boolean;
}

export interface CardsSection extends Section {
    heading?: string;
    body?: string;
    items?: Array<Card>;
    columns?: 'one' | 'two' | 'three';
}

export interface Company {
    _id: string;
    name: string;
    logo?: CustomImage;
}

export interface CustomImage {
    _id?: string;
    src: string;
    alt?: string;
    dimensions?: { height: number; width: number };
}

export interface CtaSection extends Section {
    heading?: string;
    body?: string;
    cta?: Array<ActionButton | ActionLink>;
}

export interface Footer {
    text?: string;
}

export interface Header {
    title?: string;
    logo?: CustomImage;
    navLinks?: Array<ActionButton | ActionLink>;
}

export interface HeroSection extends Section {
    heading?: string;
    body?: string;
    cta?: Array<ActionButton | ActionLink>;
}

export interface LogosSection extends Section {
    heading?: string;
    body?: string;
    items?: Array<CustomImage>;
    motion?: 'static' | 'moveToLeft' | 'moveToRight';
}

export interface Dish {
    _id: string;
    name: string;
    description?: string;
    price?: number;
    image?: CustomImage;
    category?: 'plato_principal' | 'comida_rapida' | 'burguers' | 'antojos' | 'bebidas' | 'snaks';
}

export interface MenuSection extends Section {
    heading?: string;
    body?: string;
    dishes?: Array<Dish>;
    columns?: 'one' | 'two' | 'three';
}

export interface Page {
    _id: string;
    slug: Slug;
    title: string;
    sections: Array<CardsSection | CtaSection | HeroSection | LogosSection | MenuSection>;
    metaTitle?: string;
    addTitleSuffix?: boolean;
    metaDescription?: string;
    socialImage?: CustomImage;
}

export interface Section {
    _type?: string;
    theme?: 'light' | 'dark';
    backgroundImage?: BackgroundImage;
    width?: 'full' | 'inset';
}

export interface SiteConfig {
    _id?: string;
    favicon?: CustomImage;
    header?: Header;
    footer?: Footer;
    titleSuffix?: string;
}

export interface Slug {
    current: string;
}
