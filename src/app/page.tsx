"use client";
import { db } from "@/lib/Database";
import { keys } from "@/schema";
import { desc, sql } from "drizzle-orm";
import { sqliteView } from "drizzle-orm/sqlite-core";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [keys, setKeys] = useState<{
    [key: string]: { count: number; frequency: number; key_code: string };
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      console.log(data);
      setKeys(data);
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="">
        <div className="map">
          {
            <div className="row">
              <div className="cell" data-key="`">
                {keys && keys["`"].count}
              </div>
              <div className="cell" data-key="1">
                {keys && keys["1"].count}
              </div>
              <div className="cell" data-key="2">
                {keys && keys["2"].count}
              </div>
              <div className="cell" data-key="3">
                {keys && keys["3"].count}
              </div>
              <div className="cell" data-key="4">
                {keys && keys["4"].count}
              </div>
              <div className="cell" data-key="5">
                {keys && keys["5"].count}
              </div>
              <div className="cell" data-key="6">
                {keys && keys["6"].count}
              </div>
              <div className="cell" data-key="7">
                {keys && keys["7"].count}
              </div>
              <div className="cell" data-key="8">
                {keys && keys["8"].count}
              </div>
              <div className="cell" data-key="9">
                {keys && keys["9"].count}
              </div>
              <div className="cell" data-key="0">
                {keys && keys["0"].count}
              </div>
              <div className="cell" data-key="=">
                {keys && keys["="].count}
              </div>
            </div>
          }

          <div className="row">
            <div className="cell" data-key="\">
              {keys && keys["\\"].count}
            </div>
            <div className="cell" data-key="'">
              {keys && keys["'"].count}
            </div>
            <div className="cell" data-key=",">
              {keys && keys[","].count}
            </div>
            <div className="cell" data-key=".">
              {keys && keys["."].count}
            </div>
            <div className="cell" data-key="p">
              {keys && keys["p"].count}
            </div>
            <div className="cell" data-key="y">
              {keys && keys["y"].count}
            </div>
            <div className="cell" data-key="f">
              {keys && keys["f"].count}
            </div>
            <div className="cell" data-key="g">
              {keys && keys["g"].count}
            </div>
            <div className="cell" data-key="c">
              {keys && keys["c"].count}
            </div>
            <div className="cell" data-key="r">
              {keys && keys["r"].count}
            </div>
            <div className="cell" data-key="l">
              {keys && keys["l"].count}
            </div>
            <div className="cell" data-key="/">
              {keys && keys["/"].count}
            </div>
          </div>

          <div className="row">
            <div className="cell" data-key="delete">
              {keys && keys["<delete>"].count}
            </div>
            <div className="cell" data-key="a">
              {keys && keys["a"].count}
            </div>
            <div className="cell" data-key="o">
              {keys && keys["o"].count}
            </div>
            <div className="cell" data-key="e">
              {keys && keys["e"].count}
            </div>
            <div className="cell" data-key="u">
              {keys && keys["u"].count}
            </div>
            <div className="cell" data-key="i">
              {keys && keys["i"].count}
            </div>
            <div className="cell" data-key="d">
              {keys && keys["d"].count}
            </div>
            <div className="cell" data-key="h">
              {keys && keys["h"].count}
            </div>
            <div className="cell" data-key="t">
              {keys && keys["t"].count}
            </div>
            <div className="cell" data-key="n">
              {keys && keys["n"].count}
            </div>
            <div className="cell" data-key="s">
              {keys && keys["s"].count}
            </div>
            <div className="cell" data-key="-">
              {keys && keys["-"].count}
            </div>
          </div>

          <div className="row">
            <div className="cell" data-key="lshift">
              {/* {keys && keys["lshift"].count} */}
            </div>
            <div className="cell" data-key=";">
              {keys && keys[";"].count}
            </div>
            <div className="cell" data-key="q">
              {keys && keys["q"].count}
            </div>
            <div className="cell" data-key="j">
              {keys && keys["j"].count}
            </div>
            <div className="cell" data-key="k">
              {keys && keys["k"].count}
            </div>
            <div className="cell" data-key="x">
              {keys && keys["x"].count}
            </div>
            <div className="cell" data-key="b">
              {keys && keys["b"].count}
            </div>
            <div className="cell" data-key="m">
              {keys && keys["m"].count}
            </div>
            <div className="cell" data-key="w">
              {keys && keys["w"].count}
            </div>
            <div className="cell" data-key="v">
              {keys && keys["v"].count}
            </div>
            <div className="cell" data-key="z">
              {keys && keys["z"].count}
            </div>
            <div className="cell" data-key="rshift">
              {/* {keys && keys["rshift"].count} */}
            </div>
          </div>

          <div className="thumbs">
            <div className="left">
              <div className="cell top1" data-key="win">
                {/* {keys && keys["win"].count} */}
              </div>
              <div className="cell top2" data-key="ctrl"></div>
              <div className="cell big1" data-key="esc">
                {keys && keys["<esc>"].count}
              </div>
              <div className="cell big2" data-key="backspace">
                {keys && keys["<backspace>"].count}
              </div>
              <div className="cell small1" data-key="alt">
                {/* {keys && keys["<alt>"].count} */}
              </div>
              <div className="cell small2" data-key="lshift">
                {/* {keys && keys["lshift"].count} */}
              </div>
            </div>

            <div className="right">
              <div className="cell top1" data-key="alt">
                {/* {keys && keys["alt"].count} */}
              </div>
              <div className="cell top2" data-key="tab">
                {keys && keys["<tab>"].count}
              </div>
              <div className="cell big1" data-key="space">
                {keys && keys["<space>"].count}
              </div>
              <div className="cell big2" data-key="enter">
                {keys && keys["<enter>"].count}
              </div>
              <div className="cell small1" data-key="caps">
                {/* {keys && keys["caps"].count} */}
              </div>
              <div className="cell small2" data-key="mod3">
                {/* {keys && keys["mod3"].count} */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
