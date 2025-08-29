/**
 * @file vue-awesome-swiper
 * @module SwiperComponent
 * @author Surmon <https://github.com/surmon-china>
 */
import Vue from 'vue';
import Swiper, { SwiperOptions } from 'swiper';
export default function getSwiperComponent(SwiperClass: typeof Swiper): import("vue/types/vue").ExtendedVue<Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
    $swiper: Swiper | null;
}, {
    handleSwiperClick(event: MouseEvent): void;
    autoReLoopSwiper(): void;
    updateSwiper(): void;
    destroySwiper(): void;
    initSwiper(): void;
}, {
    swiperInstance: Swiper | null;
    swiperOptions: SwiperOptions;
    wrapperClass: string;
}, {
    defaultOptions: SwiperOptions;
    options: SwiperOptions;
    autoUpdate: boolean;
    autoDestroy: boolean;
    deleteInstanceOnDestroy: boolean;
    cleanupStylesOnDestroy: boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
