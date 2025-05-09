import React, { FC, JSX } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../components/Bounded";
import { Heading } from "../components/Heading";
import { createClient } from "@/prismicio";
import { Skater } from "./Skater";
// import { SlideIn } from "../components/SlideIn";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid: FC<TeamGridProps> = async ({ slice }): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <Bounded
      id="team"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      {/* <SlideIn> */}
      <Heading as="h2" size="lg" className="mb-8 text-center text-white">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      {/* </SlideIn> */}
      <div className="grid grid-col-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {/* {skater.data.first_name && (
              <SlideIn>
                <Skater skater={skater} index={index} />
              </SlideIn>
            )} */}
            {skater.data.first_name && <Skater skater={skater} index={index} />}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
