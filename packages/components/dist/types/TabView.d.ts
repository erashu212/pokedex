import * as React from "react";
export declare enum TabType {
    Ability = "Ability",
    Form = "Form",
    Stat = "Stat"
}
export type TabViewProps = {
    tabs: ReadonlyArray<{
        label: string;
        value: TabType;
        content: React.ReactNode;
    }>;
    activeTab: TabType;
    onTabChange: (value: TabType) => void;
};
export declare const TabView: React.FC<TabViewProps>;
//# sourceMappingURL=TabView.d.ts.map