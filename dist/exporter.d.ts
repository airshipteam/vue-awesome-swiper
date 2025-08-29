/**
 * @file vue-awesome-swiper
 * @module exporter
 * @author Surmon <https://github.com/surmon-china>
 */
import Swiper, { SwiperOptions } from 'swiper';
import _Vue, { PluginFunction } from 'vue';
export interface InstallFunction extends PluginFunction<SwiperOptions> {
    installed?: boolean;
}
export default function exporter(SwiperClass: typeof Swiper): {
    version: string;
    install: InstallFunction;
    directive: import("vue").DirectiveOptions;
    Swiper: import("vue/types/vue").ExtendedVue<_Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => _Vue<Record<string, any>, Record<string, any>, never, never, any>>, {
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
    SwiperSlide: import("vue/types/vue").ExtendedVue<_Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => _Vue<Record<string, any>, Record<string, any>, never, never, any>>, unknown, {
        update(): void;
    }, {
        slideClass: string;
    }, Record<never, any>, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin>;
};
