import { Paragraph, H0, H1, H2, H3, H4, TypographyLarge } from "../src/Typography/Typography";

const meta = {
  title: "Typography",
  component: Paragraph,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const All = () => {
  return (
    <>
      <H0>H0 Города</H0>
      <H1>H1 Города</H1>
      <H2>H2 Города</H2>
      <H3>H3 Города</H3>
      <H4>H4 Города</H4>
      <Paragraph>Параграф</Paragraph>
      <TypographyLarge.H1>Large H1 Города</TypographyLarge.H1>
      <TypographyLarge.H2>Large H2 Города</TypographyLarge.H2>
      <TypographyLarge.H3>Large H3 Города</TypographyLarge.H3>
      <TypographyLarge.H4>Large H4 Города</TypographyLarge.H4>
      <TypographyLarge.H5>Large H4 Города</TypographyLarge.H5>
    </>
  );
};
