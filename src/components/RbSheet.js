import React, { useEffect, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export default function RbSheet({ children, sheet, setSheet }) {
  const refRBSheet = useRef();

  useEffect(() => {
    if (sheet) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [sheet]);

  const handleSheetClose = () => {
    setSheet(false);
  };

  return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        onClose={handleSheetClose}
        onOpen={() => setSheet(true)}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
            height: "auto"
          }
        }}
      >
        {children}
      </RBSheet>
  );
}
