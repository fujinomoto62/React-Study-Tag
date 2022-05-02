import { DefaultLayout } from "../template/DefaultLayout";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <>
      <DefaultLayout>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4/25
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h2>試したこと</h2>
              <ul>
                <li>スタイル全般の試し当て</li>
                <li>and検索の実現</li>
                <li>ダミーのログイン画面の追加</li>
                <li>ユーザーをクリックした際の挙動の変更</li>
                <li>atomic designを用いたコードの整理</li>
              </ul>
              <h2>思ったこと</h2>
              <ul>
                <li>
                  スタイルを当てるために色々試すのに時間がかかった。最終的にはchakraというUIを提供しているものを使った。
                </li>
              </ul>
              <h2>次回への課題</h2>
              <ul>
                <li>タグのデバッグ</li>
                <li>firebase</li>
              </ul>
              <hr />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4/13
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h2>試したこと</h2>
              <ul>
                <li>コードをatomic designに変更</li>
                <li>スタイルを少し追加</li>
                <li>タグ検索をandに変更</li>
              </ul>
              <h2>思ったこと</h2>
              <ul>
                <li>タグ検索がバグの温床になっている。</li>
                <li>
                  ページの再読み込みではクエリセレクタが残るため検索結果の表示はされるが
                  検索フォームの選択はすべて初期状態となる。
                </li>
                <li>
                  ヘッダーのSEARCHリンクをクリックすると検索フォームの選択は保持されるが、
                  検索結果が消える。
                </li>
                <li>タグのcheckboxがダブルクリックしかできない。</li>
                <li>
                  それぞれの原因はわかっているが、有効な解決策を見つけられていない。
                </li>
                <li>一度これらから離れてfirebaseを導入したい。</li>
              </ul>
              <h2>次回への課題</h2>
              <ul>
                <li>検索フォームの有象無象の解決</li>
                <li>firebaseの導入</li>
              </ul>
              <hr />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4/9
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h2>試したこと</h2>
              <ul>
                <li>
                  自動生成プログラムを作り生徒のデータ数を1000まで増やした
                </li>
                <li>LIST：(疑似)無限スクロールを追加した</li>
                <li>SEARCH：タグ検索と(疑似)無限スクロールを追加した</li>
              </ul>
              <h2>思ったこと</h2>
              <ul>
                <li>
                  タグ検索で複数選択した際に、andとorのどちらにするか迷った。本来であれば最適な人材を見つけるという観点からandにすべきかと思ったが、
                  作りやすさの観点からまずはorで作った。
                </li>
                <li>
                  タグ検索のやり方は論理演算のやり方を応用した。実験で学んだことが意外なところで役に立った。
                </li>
                <li>
                  SEARCHのタグ検索に使っているcheckboxが、ダブルタップしないと表示がつかない。原因はFromタグにあるようだが、
                  対処法がわからないので外部ライブラリに頼ろうと思う。
                </li>
                <li>
                  無限スクロールではリアルっぽさを出すためにsetTimeoutを使った。Firebaseを導入したらここはasyncに変更する。
                </li>
                <li>
                  Stateの変更タイミングがいまいち分からなかったので、SEARCHの無限スクロールは少し苦労した。
                  <br />
                  useEffectを使うことでstateが確実に変更されてから処理することが可能となった。
                </li>
              </ul>
              <h2>次回への課題</h2>
              <ul>
                <li>タグのand検索</li>
                <li>コードのリファクタリング</li>
                <li>firebaseの実装</li>
              </ul>
              <hr />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4/7
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h2>試したこと</h2>
              <ul>
                <li>
                  LIST: データベース(と仮想したもの)から少しずつデータを貰う
                </li>
                <li>SEARCH: リアルタイムにレスポンスする検索フォーム</li>
              </ul>
              <h2>思ったこと</h2>
              <ul>
                <li>
                  検索がリアルタイムレスポンスなため、入力のたびにでデータベースから情報を取得しては動作が重くなると思った。
                  そのため、動作の軽量化のためにStateを使ったデータベースのコピーを用いたが、
                  実際に早くなっているのかは不明。
                </li>
                <li>
                  名前検索が日本語の特性上「ひらがなorローマ字入力」→「漢字に変換」なので入力途中が
                  検索結果なしと表示されるため使いにくい。
                </li>
                <li>
                  React　v18のSuspenseを使ってみた。今回はPromis系を使うまでもないので恩恵がわからない。
                </li>
                <li>
                  ユーザーのタグ情報を特定の文字列しか入らないリストで管理しているが、うまい表示の仕方がわからない。
                </li>
              </ul>
              <h2>次回への課題</h2>
              <ul>
                <li>LIST: 無限スクロールの実現</li>
                <li>
                  SEARCH: タグ検索の実現 /
                  検索結果の小出し(できれば無限スクロール化)
                </li>
              </ul>
              <br />
              <br />
              <hr />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DefaultLayout>
    </>
  );
};
