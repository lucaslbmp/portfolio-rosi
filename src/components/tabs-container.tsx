"use client";

import { TabsContainerProps } from "@/types";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { useState } from "react";

const TabsContainer = ({ tabs }: TabsContainerProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(
    tabs[0].value ?? tabs[0].label
  );

  const isTabSelected = (value: string | undefined, label: string) =>
    !!selectedTab && (selectedTab === value || selectedTab === label);

  const StyledTrigger = ({
    label,
    value,
  }: {
    label: string;
    value: string | undefined;
  }) => (
    <Trigger
      className={
        "text-lg p-3 border-2 rounded-lg  transition-all duration-300" +
        (isTabSelected(value, label)
          ? " hover:text-foregroundSecondary bg-primaryLight text-foregroundSecondary border-primary"
          : " hover:text-primary hover:border-primary")
      }
      value={value ?? label}
      onClick={() => setSelectedTab(value ?? label)}
    >
      {label}
    </Trigger>
  );

  return (
    <Root defaultValue={tabs[0]?.value ?? tabs[0].label}>
      <List className="flex gap-4 px-4 pb-8 justify-center">
        {tabs.map(({ label, value }) => (
          <StyledTrigger key={label} label={label} value={value} />
        ))}
      </List>
      {tabs.map(({ label, value, pane }) => (
        <Content key={label} value={value ?? label}>
          {pane}
        </Content>
      ))}
    </Root>
  );
};

export default TabsContainer;
