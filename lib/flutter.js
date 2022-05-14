function emitcode() {
    window.chrome.webview.postMessage({
        type: "run_code",
        code: Blockly.Python.workspaceToCode(workspace)
    });
}

function add_xml_to_workspace(xml) {
    var xml_string = '<xml xmlns="https://developers.google.com/blockly/xml">' + xml + '</xml>';
    XML_DATA = Blockly.Xml.textToDom(xml_string);
    Blockly.Xml.appendDomToWorkspace(XML_DATA, workspace);
    block_added();
    var last_block = workspace.getTopBlocks()[workspace.getTopBlocks().length - 1];
    var last_block_id = last_block.id;
    workspace.centerOnBlock(last_block_id);
}

Blockly.Blocks['import_cf'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("My AutoPylot Starts")
            .appendField(new Blockly.FieldImage("./images/crown.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
        this.setColour("#000");
        this.setNextStatement(true, null);
        this.setStyle("hat_blocks")
        this.setTooltip("Import ClointFusion");
        this.setDeletable(false);
        this.setEditable(false);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python["import_cf"] = function (block) {
    Blockly.Python.definitions_["ap"] = "import my_autopylot as ap";
    // TODO: Assemble Python into code variable.
    var code = "";
    return code;
};
window.chrome.webview.addEventListener("message", function (message) {
    console.log("message", message.data)
    var msg_data = message.data;
    if (msg_data.type == "set_field_name") {
        workspace.getBlockById(msg_data.block_id).setFieldValue(msg_data.value, msg_data.field_id)
    }
    if (msg_data.type == "alert_output") {
        alert(msg_data.value)
    }
    if (msg_data.type == "set_workspace") {
        var xml = Blockly.Xml.textToDom(msg_data.value);
        Blockly.Xml.domToWorkspace(xml, workspace);

        window.chrome.webview.postMessage({
            message: "start_autosave",
            type: "autosave"
        });

    }
});


function autosave() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    complete_xml = Blockly.Xml.domToText(xml);

    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const code = Blockly.Python.workspaceToCode(workspace);
    complete_code = code

    window.chrome.webview.postMessage({
        message: "save_code_blockly",
        type: "autosave",
        code: complete_code,
        workspace: complete_xml,
    });
}

function autosave2() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    complete_xml = Blockly.Xml.domToText(xml);

    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const code = Blockly.Python.workspaceToCode(workspace);
    complete_code = code

    window.chrome.webview.postMessage({
        message: "save_code_blockly",
        type: "autosave",
        code: complete_code,
        workspace: complete_xml,
    });
}

window.chrome.webview.postMessage({
    message: "initialize_blockly",
});

