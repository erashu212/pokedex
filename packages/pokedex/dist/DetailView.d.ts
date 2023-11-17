import * as React from "react";
type BaseMetric = {
    name: string;
    url?: string;
};
type BaseDetails = {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    order: number;
    weight: number;
    avatarImage: string;
    coverImage: string;
};
type Ability = BaseMetric;
type Form = BaseMetric;
type Stat = BaseMetric & {
    baseStat: number;
    effort: number;
};
type Type = BaseMetric;
export type DetailViewProps = BaseDetails & {
    abilities: ReadonlyArray<Ability>;
    forms: ReadonlyArray<Form>;
    stats: ReadonlyArray<Stat>;
    types: ReadonlyArray<Type>;
};
export declare const DetailView: React.FC<DetailViewProps>;
export {};
//# sourceMappingURL=DetailView.d.ts.map