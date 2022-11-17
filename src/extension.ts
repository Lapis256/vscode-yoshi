import { window, workspace, ExtensionContext } from "vscode";

const yoshiCat = `                             /＼    ／ヽ
                          ／￣￣￣￣ヽ
                       ∠＿＿ ╋ ＿＿ゝ
 保存ヨシ!         /   ( . )  八 ( . )     ヽ
                    ｛ = / ( 人_) = | ´ ￣) \`  ヽ
                       ＼    {   {_ , ﾉ  ﾉ    / / ヽ   ヽ
             ⊂￣ヽ__ ＞ ― ― ―''’,〈         (＿)
                \`ヘ(＿＿ィ  r―‐γ     |
                           _,ﾉ  j         |     |
                       ｛   ｛        ﾉ    /＼
                           ＼ス￣￣l しｲ＼  ＼
                         (￣    )      j   /      ＼_j＼
                          ￣ ￣     (    \`ヽ        ＼__)
                                         ＼__ﾉ`;

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        workspace.onDidSaveTextDocument(() => {
            window.showInformationMessage(yoshiCat, { modal: true });
        })
    );
}
