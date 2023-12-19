/* eslint-disable react/no-unknown-property */
import { a } from '@react-spring/three';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import islandScene from '../assets/3d/island.glb';

export function Island({ isRotating, setIsRotating, ...props }) {
  const islandRef = useRef();

  const { nodes, materials } = useGLTF(islandScene);
  return (
    // <a.group ref={islandRef} {...props}>
    //   <mesh
    //     geometry={nodes.polySurface944_tree_body_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.polySurface945_tree1_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.polySurface946_tree2_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.polySurface947_tree1_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.polySurface948_tree_body_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.polySurface949_tree_body_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    //   <mesh
    //     geometry={nodes.pCube11_rocks1_0.geometry}
    //     material={materials.PaletteMaterial001}
    //   />
    // </a.group>

    <a.group ref={islandRef} {...props}>
      <group>
        <group rotation={[0.3, -1.35, 0]}>
          <mesh
            geometry={nodes.Final_Bridge1_SF_Bridge_Mat001_0.geometry}
            material={materials['SF_Bridge_Mat.001']}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_1.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_2.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_3.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Rocks_Mat_0.geometry}
            material={materials.SF_Rocks_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_1.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_2.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Bush_Mat_0.geometry}
            material={materials.SF_Bush_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0.geometry}
            material={materials.SF_TreeWood_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0_1.geometry}
            material={materials.SF_TreeWood_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_TreeLeaf_Mat_0.geometry}
            material={materials.SF_TreeLeaf_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_HouseSupport_Mat_0.geometry}
            material={materials.SF_HouseSupport_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_HouseJoins_Mat_0.geometry}
            material={materials.SF_HouseJoins_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Chimney_Mat_0.geometry}
            material={materials.SF_Chimney_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_CutRock_Mat_0.geometry}
            material={materials.SF_CutRock_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Stalagmites_Mat_0.geometry}
            material={materials.SF_Stalagmites_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_WoodTex_Mat_0.geometry}
            material={materials.SF_WoodTex_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_PlasterTex_Mat_0.geometry}
            material={materials.SF_PlasterTex_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_StoneBrick_Mat_0.geometry}
            material={materials.SF_StoneBrick_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Island_Mat_0.geometry}
            material={materials.SF_Island_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_LampGlass_Mat_0.geometry}
            material={materials.SF_LampGlass_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Lamp_Mat_0.geometry}
            material={materials.SF_Lamp_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Candle_Mat_0.geometry}
            material={materials.SF_Candle_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Grass_Mat_0.geometry}
            material={materials.SF_Grass_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Rail_Mat_0.geometry}
            material={materials.SF_Rail_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_1.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_2.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_3.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Sack_Mat_0.geometry}
            material={materials.SF_Sack_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_MineCart_Mat_0.geometry}
            material={materials.SF_MineCart_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Bridge_Mat_0.geometry}
            material={materials.SF_Bridge_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Door_Mat_0.geometry}
            material={materials.SF_Door_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Water_Mat_0.geometry}
            material={materials.SF_Water_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_Final_Water001_0.geometry}
            material={materials['Final_Water.001']}
          />
          <mesh
            geometry={nodes.Final_Bridge1_Final_Rocks2_Mat_0.geometry}
            material={materials.Final_Rocks2_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_Black_0.geometry}
            material={materials.Black}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_ButterFly_Mat_0.geometry}
            material={materials.SF_ButterFly_Mat}
          />
          <mesh
            geometry={nodes.Final_Bridge1_SF_Lillypad_Mat_0.geometry}
            material={materials.SF_Lillypad_Mat}
          />
        </group>
      </group>
    </a.group>
  );
}
