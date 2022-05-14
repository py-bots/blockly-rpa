Blockly.Blocks['art_simple_effects'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Simple Effects")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("user_input_img_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Image Path")
            .appendField("=");
        this.appendValueInput("name_required_on_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (OPT)")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#511B73');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['art_neural_effects'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Neural Effects")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Image Folder")
            .appendField("=");
        this.appendValueInput("style_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Styles Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#511B73');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_facecam'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("AR Facecam")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("left_eye_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Left Eye Pic (OPT)")
            .appendField("=");
        this.appendValueInput("right_eye_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Right Eye Pic (OPT)")
            .appendField("=");
        this.appendValueInput("mouth_animation")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Mouth Video (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_trackhands'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Track Hands")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_facemesh'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Face Mesh")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['convert_change_corrupt_xls_to_xlsx'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Corrupt XLS to XLSX")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_xls_to_xlsx'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("XLS to XLSX")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_image_to_base64'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Image to Base64")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[x,y]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_base64_to_img'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Base64 to Image")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("imgBase64Str")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Base64")
            .appendField("=");
        this.appendValueInput("img_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("img_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_csv_to_excel'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("CSV to Excel")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("csv_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("sep")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Separator")
            .appendField("=");
        this.appendValueInput("excel_output_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("excel_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_jpg_to_png'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("JPG to PNG")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_png_to_jpg'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PNG to JPG")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_excel_to_colored_html'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel to HTML")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['ds_html_table_from_website'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("HTML Table from Website")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("website_url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Website URL")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#623A2C');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_pivot_excel_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Pivot Table")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("rows")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Rows")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Cols")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#623A2C');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_describe_excel_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Describe Excel")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("About the Excel");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#623A2C');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_draw_charts_from_excel'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel Chart")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("x_col")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X Column")
            .appendField("=");
        this.appendValueInput("y_col")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y Column")
            .appendField("=");
        this.appendValueInput("title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["BAR", "bar"], ["SCATTER", "scatter"], ["PIE", "pie"], ["SUNBURST", "sun"], ["HISTOGRAM", "histogram"], ["BOX", "box"], ["STRIP", "strip"]]), "chart_type");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#623A2C');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_copy_range_from_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Copy From Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("end_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("End Column")
            .appendField("=");
        this.appendValueInput("end_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("End Row")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Contents in range");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_single_cell'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get from Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Content in Cell");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_paste_range_to_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Paste to Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("copied_data")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Data")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_set_single_cell'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set to Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendValueInput("text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Data")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_all_header_columns'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Headers")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[Head1, Hea..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_row_column_count'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Row Column Count")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[Row, Column]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_all_sheet_names'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Sheet Names")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[Sheet 1, Sheet..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_clear_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_drop_columns'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Drop Columns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Columns")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_remove_duplicates'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Remove Duplicates")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Save to Same file")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_group_by_column_values_n_split'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Group By Column and Split")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_if_value_exists'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Check Value Exists")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("value")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Value")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_template_format'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Template Format")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("input_template_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Template Filepath")
            .appendField("=");
        this.appendValueInput("input_template_sheetname")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Template Sheetname")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Save to Same file")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_format_as_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Table Format")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_merge_all_files'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Merge All Files")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_create_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Excel File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("output_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Sheet Name")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['pause_program'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Pause Program")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("seconds")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Seconds")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['text_to_speech'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Text To Speech")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("audio")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Show Text")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "show");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#1E797D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['speech_to_text'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Speech To Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Text you spoke..");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#1E797D');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['image_to_text'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Image To Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("img_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Path")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Text from image");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#102F24');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['api_request'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("API")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("URL")
            .appendField("=");
        this.appendValueInput("headers")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("HEADERS")
            .appendField("=");
        this.appendValueInput("body")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("BODY")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Method")
            .appendField(new Blockly.FieldDropdown([["GET", "get"], ["POST", "post"], ["PUT", "put"], ["DELETE", "delete"]]), "method");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Text from image");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_write_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Write Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("txt_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("File Path")
            .appendField("=");
        this.appendValueInput("contents")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Contents")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_create'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Folder")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("strFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_create_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("textFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("txtFileName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Filename")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_delete_all_files'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Delete Files")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("fullPathOfTheFolder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("file_extension_without_dot")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Extension")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Print Status")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "print_status");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['file_rename'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Rename File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("old_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Old File Path")
            .appendField("=");
        this.appendValueInput("new_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("New File Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Print Status")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "print_status");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_get_all_filenames_as_list'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Filenames")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("strFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("extension")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Extension")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[file1, file2..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_read_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Read Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("txt_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("File Path")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Contents of File");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['file_get_json_details'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get JSON Data")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("path_of_json_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("JSON File Path")
            .appendField("=");
        this.appendValueInput("section")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Section (Key)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Info under Key");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_press'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Keys")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
            ["a", "'a'"],
            ["b", "'b'"],
            ["c", "'c'"],
            ["d", "'d'"],
            ["e", "'e'"],
            ["f", "'f'"],
            ["g", "'g'"],
            ["h", "'h'"],
            ["i", "'i'"],
            ["j", "'j'"],
            ["k", "'k'"],
            ["l", "'l'"],
            ["m", "'m'"],
            ["n", "'n'"],
            ["o", "'o'"],
            ["p", "'p'"],
            ["q", "'q'"],
            ["r", "'r'"],
            ["s", "'s'"],
            ["t", "'t'"],
            ["u", "'u'"],
            ["v", "'v'"],
            ["w", "'w'"],
            ["x", "'x'"],
            ["y", "'y'"],
            ["z", "'z'"],
            ["A", "'A'"],
            ["B", "'B'"],
            ["C", "'C'"],
            ["D", "'D'"],
            ["E", "'E'"],
            ["F", "'F'"],
            ["G", "'G'"],
            ["H", "'H'"],
            ["I", "'I'"],
            ["J", "'J'"],
            ["K", "'K'"],
            ["L", "'L'"],
            ["M", "'M'"],
            ["N", "'N'"],
            ["O", "'O'"],
            ["P", "'P'"],
            ["Q", "'Q'"],
            ["R", "'R'"],
            ["S", "'S'"],
            ["T", "'T'"],
            ["U", "'U'"],
            ["V", "'V'"],
            ["W", "'W'"],
            ["X", "'X'"],
            ["Y", "'Y'"],
            ["Z", "'Z'"],
            ["1", "'1'"],
            ["2", "'2'"],
            ["3", "'3'"],
            ["4", "'4'"],
            ["5", "'5'"],
            ["6", "'6'"],
            ["7", "'7'"],
            ["8", "'8'"],
            ["9", "'9'"],
            ["0", "'0'"],
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_1");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
            ["a", "'a'"],
            ["b", "'b'"],
            ["c", "'c'"],
            ["d", "'d'"],
            ["e", "'e'"],
            ["f", "'f'"],
            ["g", "'g'"],
            ["h", "'h'"],
            ["i", "'i'"],
            ["j", "'j'"],
            ["k", "'k'"],
            ["l", "'l'"],
            ["m", "'m'"],
            ["n", "'n'"],
            ["o", "'o'"],
            ["p", "'p'"],
            ["q", "'q'"],
            ["r", "'r'"],
            ["s", "'s'"],
            ["t", "'t'"],
            ["u", "'u'"],
            ["v", "'v'"],
            ["w", "'w'"],
            ["x", "'x'"],
            ["y", "'y'"],
            ["z", "'z'"],
            ["A", "'A'"],
            ["B", "'B'"],
            ["C", "'C'"],
            ["D", "'D'"],
            ["E", "'E'"],
            ["F", "'F'"],
            ["G", "'G'"],
            ["H", "'H'"],
            ["I", "'I'"],
            ["J", "'J'"],
            ["K", "'K'"],
            ["L", "'L'"],
            ["M", "'M'"],
            ["N", "'N'"],
            ["O", "'O'"],
            ["P", "'P'"],
            ["Q", "'Q'"],
            ["R", "'R'"],
            ["S", "'S'"],
            ["T", "'T'"],
            ["U", "'U'"],
            ["V", "'V'"],
            ["W", "'W'"],
            ["X", "'X'"],
            ["Y", "'Y'"],
            ["Z", "'Z'"],
            ["1", "'1'"],
            ["2", "'2'"],
            ["3", "'3'"],
            ["4", "'4'"],
            ["5", "'5'"],
            ["6", "'6'"],
            ["7", "'7'"],
            ["8", "'8'"],
            ["9", "'9'"],
            ["0", "'0'"],
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_2");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
            ["a", "'a'"],
            ["b", "'b'"],
            ["c", "'c'"],
            ["d", "'d'"],
            ["e", "'e'"],
            ["f", "'f'"],
            ["g", "'g'"],
            ["h", "'h'"],
            ["i", "'i'"],
            ["j", "'j'"],
            ["k", "'k'"],
            ["l", "'l'"],
            ["m", "'m'"],
            ["n", "'n'"],
            ["o", "'o'"],
            ["p", "'p'"],
            ["q", "'q'"],
            ["r", "'r'"],
            ["s", "'s'"],
            ["t", "'t'"],
            ["u", "'u'"],
            ["v", "'v'"],
            ["w", "'w'"],
            ["x", "'x'"],
            ["y", "'y'"],
            ["z", "'z'"],
            ["A", "'A'"],
            ["B", "'B'"],
            ["C", "'C'"],
            ["D", "'D'"],
            ["E", "'E'"],
            ["F", "'F'"],
            ["G", "'G'"],
            ["H", "'H'"],
            ["I", "'I'"],
            ["J", "'J'"],
            ["K", "'K'"],
            ["L", "'L'"],
            ["M", "'M'"],
            ["N", "'N'"],
            ["O", "'O'"],
            ["P", "'P'"],
            ["Q", "'Q'"],
            ["R", "'R'"],
            ["S", "'S'"],
            ["T", "'T'"],
            ["U", "'U'"],
            ["V", "'V'"],
            ["W", "'W'"],
            ["X", "'X'"],
            ["Y", "'Y'"],
            ["Z", "'Z'"],
            ["1", "'1'"],
            ["2", "'2'"],
            ["3", "'3'"],
            ["4", "'4'"],
            ["5", "'5'"],
            ["6", "'6'"],
            ["7", "'7'"],
            ["8", "'8'"],
            ["9", "'9'"],
            ["0", "'0'"],
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_3");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#511B73');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_write_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Write Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("text_to_write")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Text")
            .appendField("=");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("At End")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Enter", "e"], ["Tab", "t"]]), "key");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#511B73');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_hit_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Enter")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#511B73');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mail_send_via_desktop_outlook'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Desktop Outlook")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("to_email_id")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("To Email")
            .appendField("=");
        this.appendValueInput("subject")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Subject")
            .appendField("=");
        this.appendValueInput("message")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("attachment_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Attachment (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#611BD1');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mail_send_gmail_with_app_password'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("GMAIL")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("gmail_username")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Username")
            .appendField("=");
        this.appendValueInput("gmail_app_password")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("App Password")
            .appendField("=");
        this.appendValueInput("to_email_id")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("To Email")
            .appendField("=");
        this.appendValueInput("subject")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Subject")
            .appendField("=");
        this.appendValueInput("message")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("attachment_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Attachment (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#611BD1');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['msg_box_info'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Message")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3C0C88');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['msg_box_ask_yes_no'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Yes or No")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3C0C88');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['msg_count_down'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Count Down")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("default_time")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Time")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3C0C88');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['print_ap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("      PRINT")
            .appendField(new Blockly.FieldVariable("STATUS"), "status");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_click'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Click")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendValueInput("no_of_clicks")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("No of Clicks")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Button")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "left_or_right");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#42668B');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_move'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Move")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#42668B');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_drag_from_to'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Drag")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start X Pos")
            .appendField("=");
        this.appendValueInput("y1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Y Pos")
            .appendField("=");
        this.appendValueInput("x2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Final X Pos")
            .appendField("=");
        this.appendValueInput("y2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Final Y Pos")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#42668B');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_search_snip_return_coordinates_x_y'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Image Position")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("img")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Image Path")
            .appendField("=");
        this.appendValueInput("wait")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Wait (If not found)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("] ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[x,y]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#42668B');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pdf_extract_all_tables'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Tables From PDF")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pdf_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("File Path")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#6D1010');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['citrix_scrape_contents_by_search_copy_paste'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Scrape Contents By Search Copy Paste")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("highlight_text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Search Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("] ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Contents that is copied to clipboard.");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#2672A1');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['citrix_window_clear_search'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear Search Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#2672A1');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clipboard_get_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Data from Clipboard")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Contents in Clipboard");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clipboard_set_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Data to Clipboard")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("data")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Data")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['screen_clear_search'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear search")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("delay")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Delay")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scrape_save_contents_to_notepad'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Scrape to File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("folderPathToSaveTheNotepad")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Folder path")
            .appendField("=");
        this.appendValueInput("switch_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("File path");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_only_alphabets'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Alphabets")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputString")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("String (or) Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("ModifiedString");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_only_numbers'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Numbers")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputString")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("String (or) Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("123456789");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_remove_special_characters'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Remove Symbols")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputStr")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("String (or) Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Abc123");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['windows_show_desktop'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Show Desktop")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['windows_launch_app'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Launch App")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pathOfExeFile")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Path")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_restore_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Restore Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_activate_and_maximize_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Maximize Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_minimize_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Minimize Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_close_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Close Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_get_all_opened_titles_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get All Window Names")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[title1, title2, ..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_get_active_window'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Active Window Title")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Title of Window");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_activate_window'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Activate Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("window_title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name (or) Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};