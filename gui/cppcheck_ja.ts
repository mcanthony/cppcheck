<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="ja_JP">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>cppcheckについて</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Version %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>CppcheckはC/C++ 静的コード解析ツールです.</translation>
    </message>
    <message utf8="true">
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-2015 Daniel Marjamäki and cppcheck team.</source>
        <oldsource>Copyright © 2007-2013 Daniel Marjamäki and cppcheck team.</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>本ソフトウェアはGNU General Public License Version3 ライセンスの元で配布されます</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Cppcheckのホームページはこちら %1</translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="application.ui" line="23"/>
        <source>Add an application</source>
        <translation>アプリケーションの追加</translation>
    </message>
    <message>
        <location filename="application.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>名(&amp;N)</translation>
    </message>
    <message>
        <location filename="application.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>実行可能(&amp;E)</translation>
    </message>
    <message>
        <location filename="application.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>パラメータ：(&amp;P)</translation>
    </message>
    <message>
        <location filename="application.ui" line="138"/>
        <source>Browse</source>
        <translation>参照</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="59"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>実行ファイル (*.exe);;すべてのファイル(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="62"/>
        <source>Select viewer application</source>
        <translation>表示アプリケーションの選択</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="77"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="78"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="42"/>
        <source>Could not find the file: %1</source>
        <translation>ファイル：%1 が見つかりません</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="46"/>
        <location filename="fileviewdialog.cpp" line="60"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="56"/>
        <source>Could not read the file: %1</source>
        <translation>ファイル：%1 が読み込めません</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="55"/>
        <source>Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="64"/>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="104"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="124"/>
        <source>Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="157"/>
        <source>Comments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="197"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="205"/>
        <source>False</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="210"/>
        <source>True</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="215"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="225"/>
        <source>return value must be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>ignore function in leaks checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>Arguments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="251"/>
        <source>Edit</source>
        <translation type="unfinished">編集</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="75"/>
        <source>Library files (*.cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="77"/>
        <source>Open library file</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="208"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="234"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="129"/>
        <location filename="libraryeditargdialog.ui" line="239"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="137"/>
        <location filename="libraryeditargdialog.ui" line="247"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="164"/>
        <location filename="libraryeditargdialog.ui" line="274"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="199"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="320"/>
        <source>Valid values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LogView</name>
    <message>
        <location filename="logview.ui" line="17"/>
        <source>Checking Log</source>
        <translation>Cppcheck ログ</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="34"/>
        <source>Clear</source>
        <translation>消去</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="68"/>
        <source>Save Log</source>
        <translation>ログ保存</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="69"/>
        <source>Text files (*.txt *.log);;All files (*.*)</source>
        <translation>テキストファイル (*.txt *.log);;すべてのファイル(*.*)</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="73"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="74"/>
        <source>Could not open file for writing: &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="main.ui" line="26"/>
        <location filename="mainwindow.cpp" line="298"/>
        <location filename="mainwindow.cpp" line="366"/>
        <location filename="mainwindow.cpp" line="422"/>
        <location filename="mainwindow.cpp" line="485"/>
        <location filename="mainwindow.cpp" line="507"/>
        <location filename="mainwindow.cpp" line="814"/>
        <location filename="mainwindow.cpp" line="919"/>
        <location filename="mainwindow.cpp" line="1039"/>
        <location filename="mainwindow.cpp" line="1209"/>
        <location filename="mainwindow.cpp" line="1296"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="main.ui" line="70"/>
        <source>&amp;File</source>
        <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
        <location filename="main.ui" line="89"/>
        <source>&amp;View</source>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <location filename="main.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>ツールバー(&amp;T)</translation>
    </message>
    <message>
        <location filename="main.ui" line="122"/>
        <source>&amp;Help</source>
        <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
        <location filename="main.ui" line="132"/>
        <source>&amp;Check</source>
        <translation>解析(&amp;A)</translation>
    </message>
    <message>
        <location filename="main.ui" line="136"/>
        <source>C++ standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="143"/>
        <source>C standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="166"/>
        <source>&amp;Edit</source>
        <translation>編集(&amp;E)</translation>
    </message>
    <message>
        <location filename="main.ui" line="179"/>
        <source>Standard</source>
        <translation>標準(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="199"/>
        <source>Categories</source>
        <translation>カテゴリ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="227"/>
        <source>&amp;License...</source>
        <translation>ライセンス(&amp;L)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="232"/>
        <source>A&amp;uthors...</source>
        <translation>作者(&amp;u)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="241"/>
        <source>&amp;About...</source>
        <translation>Cppcheckについて(&amp;A)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="246"/>
        <source>&amp;Files...</source>
        <translation>ファイル選択(&amp;F)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="249"/>
        <location filename="main.ui" line="252"/>
        <source>Check files</source>
        <translation>ファイルをチェック</translation>
    </message>
    <message>
        <location filename="main.ui" line="255"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="main.ui" line="264"/>
        <source>&amp;Directory...</source>
        <translation>ディレクトリ選択(&amp;D)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="267"/>
        <location filename="main.ui" line="270"/>
        <source>Check directory</source>
        <translation>ディレクトリをチェック</translation>
    </message>
    <message>
        <location filename="main.ui" line="273"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="main.ui" line="282"/>
        <source>&amp;Recheck files</source>
        <translation>再チェック(&amp;R)</translation>
    </message>
    <message>
        <location filename="main.ui" line="285"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="main.ui" line="294"/>
        <source>&amp;Stop</source>
        <translation>停止(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="297"/>
        <location filename="main.ui" line="300"/>
        <source>Stop checking</source>
        <translation>チェックを停止する</translation>
    </message>
    <message>
        <location filename="main.ui" line="303"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="main.ui" line="312"/>
        <source>&amp;Save results to file...</source>
        <translation>結果をファイルに保存(&amp;S)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="315"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="main.ui" line="320"/>
        <source>&amp;Quit</source>
        <translation>終了(&amp;Q)</translation>
    </message>
    <message>
        <location filename="main.ui" line="329"/>
        <source>&amp;Clear results</source>
        <translation>結果をクリア(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="338"/>
        <source>&amp;Preferences</source>
        <translation>設定(&amp;P)</translation>
    </message>
    <message>
        <location filename="main.ui" line="350"/>
        <source>Style warnings</source>
        <translation>スタイル警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="353"/>
        <location filename="main.ui" line="356"/>
        <source>Show style warnings</source>
        <translation>スタイル警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="368"/>
        <source>Errors</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="main.ui" line="371"/>
        <location filename="main.ui" line="374"/>
        <source>Show errors</source>
        <translation>エラーを表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="455"/>
        <source>Show S&amp;cratchpad...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="549"/>
        <location filename="mainwindow.cpp" line="583"/>
        <location filename="mainwindow.cpp" line="615"/>
        <source>Information</source>
        <translation>情報</translation>
    </message>
    <message>
        <location filename="main.ui" line="552"/>
        <source>Show information messages</source>
        <translation>情報メッセージを表示します。</translation>
    </message>
    <message>
        <location filename="main.ui" line="564"/>
        <source>Portability</source>
        <translation>移植可能性</translation>
    </message>
    <message>
        <location filename="main.ui" line="567"/>
        <source>Show portability warnings</source>
        <translation>潜在的な移植可能性の問題を示しています。</translation>
    </message>
    <message>
        <location filename="main.ui" line="575"/>
        <source>&amp;Filter</source>
        <translation>フィルター(&amp;F)</translation>
    </message>
    <message>
        <location filename="main.ui" line="578"/>
        <source>Filter results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="594"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="602"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="610"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="618"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="626"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="634"/>
        <source>Platforms</source>
        <translation>プラットフォーム</translation>
    </message>
    <message>
        <location filename="main.ui" line="648"/>
        <source>C++11</source>
        <translation>C++11</translation>
    </message>
    <message>
        <location filename="main.ui" line="659"/>
        <source>C99</source>
        <translation>C99</translation>
    </message>
    <message>
        <location filename="main.ui" line="667"/>
        <source>Posix</source>
        <translation>Posix</translation>
    </message>
    <message>
        <location filename="main.ui" line="675"/>
        <source>C11</source>
        <translation type="unfinished">C11</translation>
    </message>
    <message>
        <location filename="main.ui" line="683"/>
        <source>C89</source>
        <translation type="unfinished">C89</translation>
    </message>
    <message>
        <location filename="main.ui" line="691"/>
        <source>C++03</source>
        <translation type="unfinished">C++03</translation>
    </message>
    <message>
        <location filename="main.ui" line="696"/>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="699"/>
        <source>Print the Current Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="704"/>
        <source>Print Pre&amp;view...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="707"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="712"/>
        <source>Library Editor...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="715"/>
        <source>Open library editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="723"/>
        <source>Auto-detect language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="731"/>
        <source>Enforce C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="739"/>
        <source>Enforce C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="476"/>
        <source>C&amp;lose Project File</source>
        <translation>プロジェクトを閉じる(&amp;l)</translation>
    </message>
    <message>
        <location filename="main.ui" line="484"/>
        <source>&amp;Edit Project File...</source>
        <translation>プロジェクトの編集(&amp;E)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="493"/>
        <source>&amp;Statistics</source>
        <translation>統計情報(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="505"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="508"/>
        <location filename="main.ui" line="511"/>
        <source>Show warnings</source>
        <translation>警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="523"/>
        <source>Performance warnings</source>
        <translation>パフォーマンス警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="526"/>
        <location filename="main.ui" line="529"/>
        <source>Show performance warnings</source>
        <translation>パフォーマンス警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="537"/>
        <source>Show &amp;hidden</source>
        <translation>非表示を表示(&amp;h)</translation>
    </message>
    <message>
        <location filename="main.ui" line="379"/>
        <source>&amp;Check all</source>
        <translation>すべてのエラーを表示(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="216"/>
        <source>Filter</source>
        <translation>フィルター</translation>
    </message>
    <message>
        <location filename="main.ui" line="384"/>
        <source>&amp;Uncheck all</source>
        <translation>すべてのエラーを非表示(&amp;U)</translation>
    </message>
    <message>
        <location filename="main.ui" line="389"/>
        <source>Collapse &amp;all</source>
        <translation>ツリーを折り畳む(&amp;A)</translation>
    </message>
    <message>
        <location filename="main.ui" line="394"/>
        <source>&amp;Expand all</source>
        <translation>ツリーを展開(&amp;E)</translation>
    </message>
    <message>
        <location filename="main.ui" line="402"/>
        <source>&amp;Standard</source>
        <translation>標準(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="405"/>
        <source>Standard items</source>
        <translation>標準項目</translation>
    </message>
    <message>
        <location filename="main.ui" line="410"/>
        <source>&amp;Contents</source>
        <translation>コンテンツ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="413"/>
        <source>Open the help contents</source>
        <translation>ヘルプファイルを開く</translation>
    </message>
    <message>
        <location filename="main.ui" line="416"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="main.ui" line="421"/>
        <source>Toolbar</source>
        <translation>ツールバー</translation>
    </message>
    <message>
        <location filename="main.ui" line="429"/>
        <source>&amp;Categories</source>
        <translation>カテゴリ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="432"/>
        <source>Error categories</source>
        <translation>エラーカテゴリ</translation>
    </message>
    <message>
        <location filename="main.ui" line="437"/>
        <source>&amp;Open XML...</source>
        <translation>XMLを開く(&amp;O)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="446"/>
        <source>Open P&amp;roject File...</source>
        <translation>プロジェクトを開く(&amp;R)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="460"/>
        <source>&amp;New Project File...</source>
        <translation>新規プロジェクト(&amp;N)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="465"/>
        <source>&amp;Log View</source>
        <translation>ログを表示(&amp;L)</translation>
    </message>
    <message>
        <location filename="main.ui" line="468"/>
        <source>Log View</source>
        <translation>ログ表示</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="293"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="367"/>
        <source>No suitable files found to check!</source>
        <translation>解析可能なファイルではありません</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="423"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>新しいファイル／ディレクトリを解析するには現在のプロジェクトを閉じてください</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="448"/>
        <source>Select directory to check</source>
        <translation>チェック対象のディレクトリを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="77"/>
        <source>Quick Filter:</source>
        <translation>クイックフィルタ：</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="437"/>
        <source>Select files to check</source>
        <translation type="unfinished">チェック対象のファイルを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="486"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="508"/>
        <source>Found project files from the directory.

Do you want to proceed checking without using any of these project files?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="583"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="592"/>
        <source>File not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="595"/>
        <source>Bad XML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="598"/>
        <source>Missing attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="601"/>
        <source>Bad attribute value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="604"/>
        <source>Unsupported format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="607"/>
        <source>Duplicate platform type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="610"/>
        <source>Platform type redefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="615"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="696"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="696"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="815"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.Do you want to proceed?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="830"/>
        <source>XML files (*.xml)</source>
        <translation>XML ファイル (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="832"/>
        <source>Open the report file</source>
        <translation>レポートを開く</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="915"/>
        <source>Checking is running.

Do you want to stop the checking and exit Cppcheck?</source>
        <translation type="unfinished">解析中です.

解析を停止してCppcheckを終了しますか？.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="961"/>
        <source>License</source>
        <translation>ライセンス</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="968"/>
        <source>Authors</source>
        <translation>作者</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="976"/>
        <source>XML files version 2 (*.xml);;XML files version 1 (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <oldsource>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</oldsource>
        <translation type="unfinished">XML ファイル (*.xml);;テキストファイル (*.txt);;CSV形式ファイル (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="978"/>
        <source>Save the report file</source>
        <translation>レポートを保存</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="985"/>
        <source>XML files version 1 (*.xml)</source>
        <translation>XMLファイルのバージョン1</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="989"/>
        <source>XML files version 2 (*.xml)</source>
        <translation>XMLファイルのバージョン2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="993"/>
        <source>Text files (*.txt)</source>
        <translation>テキストファイル (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="997"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV形式ファイル (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1041"/>
        <source>Cppcheck - %1</source>
        <translation>Cppcheck - %1</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1086"/>
        <location filename="mainwindow.cpp" line="1171"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>プロジェクトファイル (*.cppcheck);;すべてのファイル(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1088"/>
        <source>Select Project File</source>
        <translation>プロジェクトファイルを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1116"/>
        <location filename="mainwindow.cpp" line="1185"/>
        <source>Project:</source>
        <translation>プロジェクト:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1173"/>
        <source>Select Project Filename</source>
        <translation>プロジェクトファイル名を選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1210"/>
        <source>No project file loaded</source>
        <translation>プロジェクトファイルが読み込まれていません</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1291"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="100"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  Specify directory where GUI datafiles are located (translations, cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="113"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="37"/>
        <source>Built-in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Project</name>
    <message>
        <location filename="project.cpp" line="71"/>
        <location filename="project.cpp" line="123"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="project.cpp" line="72"/>
        <source>Could not read the project file.</source>
        <translation type="unfinished">プロジェクトファイルが読み込めませんでした</translation>
    </message>
    <message>
        <location filename="project.cpp" line="124"/>
        <source>Could not write the project file.</source>
        <translation type="unfinished">プロジェクトファイルが保存できませんでした</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>プロジェクトファイル</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Project</source>
        <translation>プロジェクト</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="42"/>
        <source>Defines must be separated by a semicolon &apos;;&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="53"/>
        <source>Root:</source>
        <translation>ルート：</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="70"/>
        <source>Libraries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="79"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="93"/>
        <location filename="projectfile.ui" line="242"/>
        <source>Paths:</source>
        <translation>パス:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="120"/>
        <location filename="projectfile.ui" line="183"/>
        <location filename="projectfile.ui" line="256"/>
        <source>Add...</source>
        <translation>追加...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="127"/>
        <location filename="projectfile.ui" line="190"/>
        <location filename="projectfile.ui" line="263"/>
        <source>Edit</source>
        <translation>編集</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="134"/>
        <location filename="projectfile.ui" line="197"/>
        <location filename="projectfile.ui" line="270"/>
        <location filename="projectfile.ui" line="333"/>
        <source>Remove</source>
        <translation>取り除く</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="159"/>
        <source>Includes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="165"/>
        <source>Include directories:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="217"/>
        <source>Up</source>
        <translation>上</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="224"/>
        <source>Down</source>
        <translation>下</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="236"/>
        <source>Exclude</source>
        <translation>除外する</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="295"/>
        <source>Suppressions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="301"/>
        <source>Suppression list:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="326"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="32"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="42"/>
        <source>Project file: %1</source>
        <translation>プロジェクトファイル:%1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="290"/>
        <source>Select include directory</source>
        <translation>includeディレクトリを選択</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="313"/>
        <source>Select a directory to check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="353"/>
        <source>Select directory to ignore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="412"/>
        <source>Add Suppression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="413"/>
        <source>Select error id suppress:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="translationhandler.cpp" line="32"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="33"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="34"/>
        <source>Close</source>
        <translation type="unfinished">閉じる</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="35"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="99"/>
        <source>Unknown language specified!</source>
        <translation>指定された未知の言語</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="129"/>
        <source>Language file %1 not found!</source>
        <translation>言語ファイル %1 が見つかりません!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="135"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="38"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="39"/>
        <source>Close</source>
        <translation type="unfinished">閉じる</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="40"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1059"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1059"/>
        <source>Severity</source>
        <translation>警告種別</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1059"/>
        <source>Line</source>
        <translation>行</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1059"/>
        <source>Summary</source>
        <translation>内容</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="104"/>
        <source>Undefined file</source>
        <translation>未定義ファイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="208"/>
        <location filename="resultstree.cpp" line="725"/>
        <source>[Inconclusive]</source>
        <translation>[結論の出ない]</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="266"/>
        <source>debug</source>
        <translation>デバッグ</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="527"/>
        <source>Copy filename</source>
        <translation>ファイル名をコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="528"/>
        <source>Copy full path</source>
        <translation>フルパスをコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="529"/>
        <source>Copy message</source>
        <translation>メッセージをコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="530"/>
        <source>Copy message id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="531"/>
        <source>Hide</source>
        <translation>非表示</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="532"/>
        <source>Hide all with id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="533"/>
        <source>Open containing folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="585"/>
        <location filename="resultstree.cpp" line="599"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="586"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation type="unfinished">メニューの「編集」→「設定」からテキストファイルを表示するアプリケーションを設定してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="600"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="629"/>
        <source>Could not find the file!</source>
        <translation>ファイルが見つかりません</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="675"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>%1 が実行できません。

実行ファイルパスや引数の設定を確認してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="689"/>
        <source>Could not find file:
%1
Please select the directory where file is located.</source>
        <translation>ファイルが見つかりません:
%1
ディレクトリにファイルが存在するか確認してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="696"/>
        <source>Select Directory</source>
        <translation>ディレクトリを選択</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1059"/>
        <source>Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="248"/>
        <source>style</source>
        <translation>スタイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="251"/>
        <source>error</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="254"/>
        <source>warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="257"/>
        <source>performance</source>
        <translation>パフォーマンス</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="260"/>
        <source>portability</source>
        <translation>移植可能性</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="263"/>
        <source>information</source>
        <translation>情報</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>結果</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="145"/>
        <source>No errors found, nothing to save.</source>
        <translation>警告/エラーが見つからなかったため、保存しません。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="172"/>
        <location filename="resultsview.cpp" line="180"/>
        <source>Failed to save the report.</source>
        <translation>レポートの保存に失敗しました。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="190"/>
        <source>Print Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="209"/>
        <source>No errors found, nothing to print.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="241"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="254"/>
        <location filename="resultsview.cpp" line="265"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="255"/>
        <source>No errors found.</source>
        <translation>警告/エラーは見つかりませんでした。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="262"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>警告/エラーが見つかりましたが、非表示設定になっています。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="308"/>
        <location filename="resultsview.cpp" line="326"/>
        <location filename="resultsview.cpp" line="334"/>
        <source>Failed to read the report.</source>
        <translation>レポートの読み込みに失敗.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="371"/>
        <source>Summary</source>
        <translation>内容</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="372"/>
        <source>Message</source>
        <translation>メッセージ</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="376"/>
        <source>First included by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="379"/>
        <source>Id</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="48"/>
        <source>filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="55"/>
        <source>Check</source>
        <translation type="unfinished">チェック</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>全般</translation>
    </message>
    <message>
        <location filename="settings.ui" line="169"/>
        <source>Include paths:</source>
        <translation>Include ディレクトリ:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="187"/>
        <location filename="settings.ui" line="237"/>
        <source>Add...</source>
        <translation>追加...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>解析スレッド数:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>理想的な数：</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <oldsource>Check all #ifdef configurations</oldsource>
        <translation type="unfinished">すべての #ifdef をチェックする</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>ファイルのフルパスを表示</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>エラーが無いときは&quot;エラーなし&quot;を表示</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>inline抑制を有効</translation>
    </message>
    <message>
        <location filename="settings.ui" line="163"/>
        <source>Paths</source>
        <translation>パス</translation>
    </message>
    <message>
        <location filename="settings.ui" line="194"/>
        <source>Edit</source>
        <translation>編集</translation>
    </message>
    <message>
        <location filename="settings.ui" line="201"/>
        <location filename="settings.ui" line="251"/>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="settings.ui" line="226"/>
        <source>Applications</source>
        <translation>アプリケーション</translation>
    </message>
    <message>
        <location filename="settings.ui" line="244"/>
        <source>Edit...</source>
        <translation>編集...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="258"/>
        <source>Set as default</source>
        <translation>デフォルトとして設定</translation>
    </message>
    <message>
        <location filename="settings.ui" line="281"/>
        <source>Reports</source>
        <translation>レポート</translation>
    </message>
    <message>
        <location filename="settings.ui" line="287"/>
        <source>Save all errors when creating report</source>
        <translation>すべての警告/エラーを保存</translation>
    </message>
    <message>
        <location filename="settings.ui" line="294"/>
        <source>Save full path to files in reports</source>
        <translation>ファイルのフルパスを保存</translation>
    </message>
    <message>
        <location filename="settings.ui" line="315"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
    <message>
        <location filename="settings.ui" line="329"/>
        <source>Advanced</source>
        <translation>高度</translation>
    </message>
    <message>
        <location filename="settings.ui" line="335"/>
        <source>&amp;Show inconclusive errors</source>
        <translation>結論の出ないのエラーを表示</translation>
    </message>
    <message>
        <location filename="settings.ui" line="342"/>
        <source>S&amp;how internal warnings in log</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="82"/>
        <source>N/A</source>
        <translation>N/A</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="203"/>
        <source>Add a new application</source>
        <translation>新しいアプリケーションの追加</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="236"/>
        <source>Modify an application</source>
        <translation>アプリケーションの変更</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="263"/>
        <source>[Default]</source>
        <translation>[デフォルト]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="314"/>
        <source>Select include directory</source>
        <translation>include ディレクトリを選択</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="stats.ui" line="14"/>
        <location filename="stats.ui" line="228"/>
        <location filename="statsdialog.cpp" line="105"/>
        <source>Statistics</source>
        <translation>統計情報</translation>
    </message>
    <message>
        <location filename="stats.ui" line="27"/>
        <location filename="statsdialog.cpp" line="97"/>
        <source>Project</source>
        <translation>プロジェクト</translation>
    </message>
    <message>
        <location filename="stats.ui" line="33"/>
        <source>Project:</source>
        <translation>プロジェクト:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="53"/>
        <source>Paths:</source>
        <translation>パス:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Include ディレクトリ:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="108"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="145"/>
        <location filename="statsdialog.cpp" line="101"/>
        <source>Previous Scan</source>
        <translation>前回の解析</translation>
    </message>
    <message>
        <location filename="stats.ui" line="151"/>
        <source>Path Selected:</source>
        <translation>ディレクトリ選択:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="161"/>
        <source>Number of Files Scanned:</source>
        <translation>解析済みファイル数:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="181"/>
        <source>Scan Duration:</source>
        <translation>解析にかかった時間:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="236"/>
        <source>Errors:</source>
        <translation>エラー:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="254"/>
        <source>Warnings:</source>
        <translation>警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="272"/>
        <source>Stylistic warnings:</source>
        <translation>スタイル警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="290"/>
        <source>Portability warnings:</source>
        <translation>移植可能性の警告</translation>
    </message>
    <message>
        <location filename="stats.ui" line="308"/>
        <source>Performance issues:</source>
        <translation>パフォーマンス警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="326"/>
        <source>Information messages:</source>
        <translation>情報メッセージ</translation>
    </message>
    <message>
        <location filename="stats.ui" line="364"/>
        <source>Copy to Clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>1 day</source>
        <translation>一日</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>%1 days</source>
        <translation>%1日</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>1 hour</source>
        <translation>一時間</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>%1 hours</source>
        <translation>%1時間</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>1 minute</source>
        <translation>一分</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>%1 minutes</source>
        <translation>%1分</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>1 second</source>
        <translation>一秒</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>%1 seconds</source>
        <translation>%1秒</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>0.%1 seconds</source>
        <translation>0.%1秒</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="89"/>
        <source> and </source>
        <translation></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="96"/>
        <source>Project Settings</source>
        <translation>プロジェクトの設定</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="98"/>
        <source>Paths</source>
        <translation>パス</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="99"/>
        <source>Include paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="100"/>
        <source>Defines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="102"/>
        <source>Path selected</source>
        <translation>選択されたパス</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="103"/>
        <source>Number of files scanned</source>
        <translation>スキャンしたファイルの数</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="104"/>
        <source>Scan duration</source>
        <translation>スキャン期間</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="106"/>
        <source>Errors</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="107"/>
        <source>Warnings</source>
        <translation type="unfinished">警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="108"/>
        <source>Style warnings</source>
        <translation>スタイル警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="109"/>
        <source>Portability warnings</source>
        <translation>移植可能性警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="110"/>
        <source>Performance warnings</source>
        <translation>パフォーマンス警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="111"/>
        <source>Information messages</source>
        <translation>情報メッセージ</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="54"/>
        <source>%1 of %2 files checked</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="141"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="147"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="73"/>
        <source>inconclusive</source>
        <translation>結論の出ない</translation>
    </message>
</context>
</TS>
