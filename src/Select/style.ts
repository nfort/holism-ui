import { IDimension, ISelectStyle } from "./interfaces";

const OptionMessageStyle = (dimension: IDimension | undefined): string => {
  switch (dimension) {
    case "small": {
      return "12px 20px";
    }
    case "large": {
      return "19px 20px";
    }
    case "medium":
    default: {
      return "17px 20px";
    }
  }
};

// Specific for styles in react-select
export const colorStyles = (props: Partial<ISelectStyle>): object => {
  return {
    dropdownIndicator: (styles: any) => {
      return {
        ...styles,
        display: "flex",
        paddingTop: "8px",
      };
    },
    indicatorSeparator: () => ({}),
    noOptionsMessage: (base: any) => ({
      ...base,
      textAlign: "left",
      padding: OptionMessageStyle(props.dimension),
    }),
  };
};
