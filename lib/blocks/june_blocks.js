Blockly.Blocks['excel_tabular_data_from_website'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from Website")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("website_url")
            .setCheck("String")
            .appendField("URL")
            .appendField("=");
        this.appendValueInput("table_number")
            .setCheck(null)
            .appendField("Table Number")
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
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_from_list'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from List")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("list_of_lists")
            .setCheck(null)
            .appendField("List")
            .appendField("=");
        this.appendValueInput("column_names")
            .setCheck(null)
            .appendField("Column Names")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DF"), "df")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_from_string'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df_string")
            .setCheck("String")
            .appendField("Text")
            .appendField("=");
        this.appendValueInput("word_delimeter")
            .setCheck("String")
            .appendField("Word Separator")
            .appendField("=");
        this.appendValueInput("line_delimeter")
            .setCheck("String")
            .appendField("Line Separator")
            .appendField("=");
        this.appendValueInput("column_names")
            // .setCheck("String")
            .appendField("Column Names")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DF"), "df")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_extract_sub_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Sub Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck("String")
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_start")
            .setCheck("Number")
            .appendField("Row Start")
            .appendField("=");
        this.appendValueInput("row_end")
            .setCheck("Number")
            .appendField("Row End")
            .appendField("=");
        this.appendValueInput("column_start")
            .setCheck("Number")
            .appendField("Column Start")
            .appendField("=");
        this.appendValueInput("column_end")
            .setCheck("Number")
            .appendField("Column End")
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
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['set_value_in_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set Value in Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
            .appendField("=");
        this.appendValueInput("value")
            .setCheck(null)
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
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Modified Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value_in_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Value from Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
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
            .appendField("Value");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['screen_scrape_extract_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Screen Scrape Extract Table")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("switch_to_window")
            .setCheck("String")
            .appendField("Switch to Window")
            .appendField("=");
        this.appendValueInput(",after_this_word")
            .setCheck("String")
            .appendField("After Word")
            .appendField("=");
        this.appendValueInput("before_this_word")
            .setCheck("String")
            .appendField("Before Word")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Include After Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_after_this_word");
        this.appendDummyInput()
            .appendField("Include Before Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_before_this_word");
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
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_substring'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("String Extract Substring")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("string")
            .setCheck("String")
            .appendField("String")
            .appendField("=");
        this.appendValueInput("start_word")
            .setCheck("String")
            .appendField("Start Word")
            .appendField("=");
        this.appendValueInput("end_word")
            .setCheck("String")
            .appendField("End Word")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Include Start Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_start_word");
        this.appendDummyInput()
            .appendField("Include End Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_end_word");
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
            .appendField("Modified String");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['date_time_now'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Date Time Now")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['add_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Add Date")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_date")
            .setCheck("String")
            .appendField("Input Date")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Add Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["DAY", "days"], ["HOUR", "hours"], ["MINUTE", "minutes"], ["WEEK", "weeks"], ["MONTH", "months"]]), "time_type");
        this.appendValueInput("value")
            .setCheck(null)
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
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['subtract_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Subtract Date")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_date")
            .setCheck("String")
            .appendField("Input Date")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Add Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["DAY", "days"], ["HOUR", "hours"], ["MINUTE", "minutes"], ["WEEK", "weeks"], ["MONTH", "months"]]), "time_type");
        this.appendValueInput("value")
            .setCheck(null)
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
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excel_tabular_data_from_website'] = function (block) {
    var value_website_url = Blockly.Python.valueToCode(block, 'website_url', Blockly.Python.ORDER_ATOMIC);
    var value_table_number = Blockly.Python.valueToCode(block, 'table_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_tabular_data_from_website(website_url=${value_website_url}, table_number=${value_table_number})\n`;
    return code;
};

Blockly.Python['df_from_list'] = function (block) {
    var value_list_of_lists = Blockly.Python.valueToCode(block, 'list_of_lists', Blockly.Python.ORDER_ATOMIC);
    var value_column_names = Blockly.Python.valueToCode(block, 'column_names', Blockly.Python.ORDER_ATOMIC);
    var variable_df = Blockly.Python.nameDB_.getName(block.getFieldValue('df'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_df}] = ap.df_from_list(list_of_lists=${value_list_of_lists}, column_names=${value_column_names})\n`;
    return code;
};

Blockly.Python['df_from_string'] = function (block) {
    var value_df_string = Blockly.Python.valueToCode(block, 'df_string', Blockly.Python.ORDER_ATOMIC);
    var value_word_delimeter = Blockly.Python.valueToCode(block, 'word_delimeter', Blockly.Python.ORDER_ATOMIC);
    var value_line_delimeter = Blockly.Python.valueToCode(block, 'line_delimeter', Blockly.Python.ORDER_ATOMIC);
    var value_column_names = Blockly.Python.valueToCode(block, 'column_names', Blockly.Python.ORDER_ATOMIC);
    var variable_df = Blockly.Python.nameDB_.getName(block.getFieldValue('df'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_df}] = ap.df_from_string(df_string=${value_df_string}, word_delimeter=${value_word_delimeter}, line_delimeter=${value_line_delimeter}, column_names=${value_column_names})\n`;
    return code;
};

Blockly.Python['df_extract_sub_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_start = Blockly.Python.valueToCode(block, 'row_start', Blockly.Python.ORDER_ATOMIC);
    var value_row_end = Blockly.Python.valueToCode(block, 'row_end', Blockly.Python.ORDER_ATOMIC);
    var value_column_start = Blockly.Python.valueToCode(block, 'column_start', Blockly.Python.ORDER_ATOMIC);
    var value_column_end = Blockly.Python.valueToCode(block, 'column_end', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.df_extract_sub_df(df=${value_df}, row_start=${value_row_start}, row_end=${value_row_end}, column_start=${value_column_start}, column_end=${value_column_end})\n`;
    return code;
};

Blockly.Python['set_value_in_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.set_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number}, value=${value_value})\n`;
    return code;
};

Blockly.Python['get_value_in_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.get_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number})\n`;
    return code;
};

Blockly.Python['screen_scrape_extract_table'] = function (block) {
    var value_switch_to_window = Blockly.Python.valueToCode(block, 'switch_to_window', Blockly.Python.ORDER_ATOMIC);
    var value__after_this_word = Blockly.Python.valueToCode(block, ',after_this_word', Blockly.Python.ORDER_ATOMIC);
    var value_before_this_word = Blockly.Python.valueToCode(block, 'before_this_word', Blockly.Python.ORDER_ATOMIC);
    var checkbox_include_after_this_word = block.getFieldValue('include_after_this_word') === 'TRUE';
    var checkbox_include_before_this_word = block.getFieldValue('include_before_this_word') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.screen_scrape_extract_table(switch_to_window=${value_switch_to_window}, after_this_word=${value__after_this_word}, before_this_word=${capitalize(value_before_this_word.toString())}, include_after_this_word=${capitalize(checkbox_include_after_this_word.toString())}, include_before_this_word=${capitalize(checkbox_include_before_this_word.toString())})\n`;
    return code;
};

Blockly.Python['string_extract_substring'] = function (block) {
    var value_string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
    var value_start_word = Blockly.Python.valueToCode(block, 'start_word', Blockly.Python.ORDER_ATOMIC);
    var value_end_word = Blockly.Python.valueToCode(block, 'end_word', Blockly.Python.ORDER_ATOMIC);
    var checkbox_include_start_word = block.getFieldValue('include_start_word') === 'TRUE';
    var checkbox_include_end_word = block.getFieldValue('include_end_word') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.string_extract_substring(string=${value_string}, start_word=${value_start_word}, end_word=${value_end_word}, include_start_word=${capitalize(checkbox_include_start_word.toString())}, include_end_word=${capitalize(checkbox_include_end_word.toString())})\n`;
    return code;
};

Blockly.Python['date_time_now'] = function (block) {
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.date_time_now()\n`;
    return code;
};

Blockly.Python['add_datetime'] = function (block) {
    var value_input_date = Blockly.Python.valueToCode(block, 'input_date', Blockly.Python.ORDER_ATOMIC);
    var dropdown_time_type = block.getFieldValue('time_type');
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.add_datetime(input_date=${value_input_date}, time_type='${dropdown_time_type}', value=${value_value})\n`;
    return code;
};

Blockly.Python['subtract_datetime'] = function (block) {
    var value_input_date = Blockly.Python.valueToCode(block, 'input_date', Blockly.Python.ORDER_ATOMIC);
    var dropdown_time_type = block.getFieldValue('time_type');
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.subtract_datetime(input_date=${value_input_date}, time_type='${dropdown_time_type}', value=${value_value})\n`;
    return code;
};