import { db } from "@/lib/Database";
import { keys } from "@/schema";
import Image from "next/image";

export default async function Home() {
  const result = await db.select().from(keys);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="">
        <div className="map">
          <div className="row">
            <div className="cell" data-key="`"></div>
            <div className="cell" data-key="1"></div>
            <div className="cell" data-key="2"></div>
            <div className="cell" data-key="3"></div>
            <div className="cell" data-key="4"></div>
            <div className="cell" data-key="5"></div>
            <div className="cell" data-key="6"></div>
            <div className="cell" data-key="7"></div>
            <div className="cell" data-key="8"></div>
            <div className="cell" data-key="9"></div>
            <div className="cell" data-key="0"></div>
            <div className="cell" data-key="="></div>
          </div>

          <div className="row">
            <div className="cell" data-key="\"></div>
            <div className="cell" data-key="'"></div>
            <div className="cell" data-key=","></div>
            <div className="cell" data-key="."></div>
            <div className="cell" data-key="p"></div>
            <div className="cell" data-key="y"></div>
            <div className="cell" data-key="f"></div>
            <div className="cell" data-key="g"></div>
            <div className="cell" data-key="c"></div>
            <div className="cell" data-key="r"></div>
            <div className="cell" data-key="l"></div>
            <div className="cell" data-key="/"></div>
          </div>

          <div className="row">
            <div className="cell" data-key="delete"></div>
            <div className="cell" data-key="a"></div>
            <div className="cell" data-key="o"></div>
            <div className="cell" data-key="e"></div>
            <div className="cell" data-key="u"></div>
            <div className="cell" data-key="i"></div>
            <div className="cell" data-key="d"></div>
            <div className="cell" data-key="h"></div>
            <div className="cell" data-key="t"></div>
            <div className="cell" data-key="n"></div>
            <div className="cell" data-key="s"></div>
            <div className="cell" data-key="-"></div>
          </div>

          <div className="row">
            <div className="cell" data-key="lshift"></div>
            <div className="cell" data-key=";"></div>
            <div className="cell" data-key="q"></div>
            <div className="cell" data-key="j"></div>
            <div className="cell" data-key="k"></div>
            <div className="cell" data-key="x"></div>
            <div className="cell" data-key="b"></div>
            <div className="cell" data-key="m"></div>
            <div className="cell" data-key="w"></div>
            <div className="cell" data-key="v"></div>
            <div className="cell" data-key="z"></div>
            <div className="cell" data-key="rshift"></div>
          </div>

          <div className="thumbs">
            <div className="left">
              <div className="cell top1" data-key="win"></div>
              <div className="cell top2" data-key="ctrl"></div>
              <div className="cell big1" data-key="esc"></div>
              <div className="cell big2" data-key="backspace"></div>
              <div className="cell small1" data-key="alt"></div>
              <div className="cell small2" data-key="lshift"></div>
            </div>

            <div className="right">
              <div className="cell top1" data-key="alt"></div>
              <div className="cell top2" data-key="tab"></div>
              <div className="cell big1" data-key="space"></div>
              <div className="cell big2" data-key="enter"></div>
              <div className="cell small1" data-key="caps"></div>
              <div className="cell small2" data-key="mod3"></div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
