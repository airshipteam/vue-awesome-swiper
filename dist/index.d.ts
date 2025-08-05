/**
 * @file vue-awesome-swiper
 * @module default-export
 * @author Surmon <https://github.com/surmon-china>
 */
import SwiperClass from 'swiper';
declare const VueAwesomeSwiper: {
    version: string;
    install: import("./exporter").InstallFunction;
    directive: import("vue").DirectiveOptions;
    Swiper: import("vue/types/vue").ExtendedVue<import("vue").default<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue").default<Record<string, any>, Record<string, any>, never, never, any>>, {
        $swiper: SwiperClass | null;
    }, {
        handleSwiperClick(event: MouseEvent): void;
        autoReLoopSwiper(): void;
        updateSwiper(): void;
        destroySwiper(): void;
        initSwiper(): void;
    }, {
        swiperInstance: SwiperClass | null;
        swiperOptions: import("swiper").SwiperOptions;
        wrapperClass: string;
    }, {
        defaultOptions: import("swiper").SwiperOptions;
        options: import("swiper").SwiperOptions;
        autoUpdate: boolean;
        autoDestroy: boolean;
        deleteInstanceOnDestroy: boolean;
        cleanupStylesOnDestroy: boolean;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
    SwiperSlide: import("vue/types/vue").ExtendedVue<import("vue").default<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue").default<Record<string, any>, Record<string, any>, never, never, any>>, unknown, {
        update(): void;
    }, {
        slideClass: string;
    }, Record<never, any>, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
};
export declare const version: string;
export declare const install: import("./exporter").InstallFunction;
export declare const directive: import("vue").DirectiveOptions;
export declare const Swiper: import("vue/types/vue").ExtendedVue<import("vue").default<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue").default<Record<string, any>, Record<string, any>, never, never, any>>, {
    $swiper: SwiperClass | null;
}, {
    handleSwiperClick(event: MouseEvent): void;
    autoReLoopSwiper(): void;
    updateSwiper(): void;
    destroySwiper(): void;
    initSwiper(): void;
}, {
    swiperInstance: SwiperClass | null;
    swiperOptions: import("swiper").SwiperOptions;
    wrapperClass: string;
}, {
    defaultOptions: import("swiper").SwiperOptions;
    options: import("swiper").SwiperOptions;
    autoUpdate: boolean;
    autoDestroy: boolean;
    deleteInstanceOnDestroy: boolean;
    cleanupStylesOnDestroy: boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
export declare const SwiperSlide: import("vue/types/vue").ExtendedVue<import("vue").default<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => import("vue").default<Record<string, any>, Record<string, any>, never, never, any>>, unknown, {
    update(): void;
}, {
    slideClass: string;
}, Record<never, any>, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
export default VueAwesomeSwiper;
