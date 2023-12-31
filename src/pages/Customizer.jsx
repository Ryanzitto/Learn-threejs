import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

import {
  AIPicker,
  ColorPicker,
  FilePicker,
  CustomButton,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className=" flex - items-center min-h-screen">
              <div className="editorstabs-container tabs">
                {EditorTabs.map((tab) => {
                  <Tab key={tab.name} tab={tab} handleClick={() => {}}></Tab>;
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
