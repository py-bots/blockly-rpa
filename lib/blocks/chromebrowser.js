Blockly.Blocks["chrome_instance"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Chrome ||")
      .appendField("Dummy:")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "dummy_browser")
      .appendField("Incognito :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "incognito")
      .appendField("Profile :")
      .appendField(new Blockly.FieldTextInput("Default"), "profile");
    this.appendValueInput("chrome_driver").setCheck(null);
    this.appendStatementInput("chrome_actions").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_instance"] = function (block) {
  var checkbox_dummy_browser = block.getFieldValue("dummy_browser") === "TRUE";
  var checkbox_incognito = block.getFieldValue("incognito") === "TRUE";
  var text_profile = block.getFieldValue("profile");
  var value_chrome_driver = Blockly.Python.valueToCode(
    block,
    "chrome_driver",
    Blockly.Python.ORDER_ATOMIC
  );
  var statements_chrome_actions = Blockly.Python.statementToCode(
    block,
    "chrome_actions"
  );

  if (statements_chrome_actions.length > 0) {
    statements_chrome_actions = statements_chrome_actions.replace(
      /chrome/g,
      value_chrome_driver
    );
  }

  // TODO: Assemble Python into code variable.
  var code = `def run_browser():\n  ${value_chrome_driver}=ap.ChromeBrowser()\n  ${value_chrome_driver}.open_browser(${capitalize(
    checkbox_dummy_browser.toString()
  )}, "${text_profile}", ${capitalize(
    checkbox_incognito.toString()
  )})\n${statements_chrome_actions}  ${value_chrome_driver}.close()\nrun_browser()\n`;
  return code;
};

Blockly.Blocks["chrome_navigate"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("Go to url ||");
    // this.appendValueInput("navigate").setCheck("chrome").appendField("in");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_navigate"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.navigate(${value_name})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_write"] = {
  init: function () {
    this.appendValueInput("text").setCheck("String").appendField("Write ||");
    this.appendValueInput("user_visible_text_element")
      .setCheck("String")
      .appendField("in field name ||");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_write"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_user_visible_text_element = Blockly.Python.valueToCode(
    block,
    "user_visible_text_element",
    Blockly.Python.ORDER_ATOMIC
  );
  // var value_navigate = Blockly.Python.valueToCode(
  //   block,
  //   "navigate",
  //   Blockly.Python.ORDER_ATOMIC
  // );
  // TODO: Assemble Python into code variable.
  var code = `chrome.write(${value_text}, ${value_user_visible_text_element})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Blocks["chrome_mouse_click"] = {
//   init: function () {
//     this.appendValueInput("user_visible_text_element")
//       .setCheck("String")
//       .appendField("Click on Text ||");
//     this.appendValueInput("element")
//       .setCheck("String")
//       .appendField("or Element ||");
//     this.appendDummyInput()
//       .appendField("Double Click")
//       .appendField(new Blockly.FieldCheckbox("FALSE"), "double_click")
//       .appendField("Right Click")
//       .appendField(new Blockly.FieldCheckbox("FALSE"), "right_click");
//     // this.appendValueInput("navigate")
//     // .setCheck("chrome")
//     // .appendField("|| in ||");
//     this.setInputsInline(true);
//     this.setOutput(true, "Array");
//     this.setColour("#611BD1");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

Blockly.Blocks['chrome_mouse_click'] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck("String")
      .appendField("Mouse Click |")
      .appendField("On");
    this.appendDummyInput()
      .appendField("|| Click Type")
      .appendField(new Blockly.FieldDropdown([["Single", "single"], ["Double", "double"], ["Right", "right"], ["Hover", "hover"]]), "action_type");
    this.appendDummyInput()
      .appendField("|| Value Type")
      .appendField(new Blockly.FieldDropdown([["Text", "text"], ["Button", "button"], ["Link", "link"], ["Checkbox", "checkbox"], ["Radio", "radio"], ["Image", "image"], ["XPath", "xpath"]]), "value_type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python['chrome_mouse_click'] = function (block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action_type = block.getFieldValue('action_type');
  var dropdown_value_type = block.getFieldValue('value_type');
  // TODO: Assemble Python into code variable.
  var code = `chrome.mouse(value=${value_value}, action_type = "${dropdown_action_type}", value_type = "${dropdown_value_type}")\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Python["chrome_mouse_click"] = function (block) {
//   var value_user_visible_text_element = Blockly.Python.valueToCode(
//     block,
//     "user_visible_text_element",
//     Blockly.Python.ORDER_ATOMIC
//   );
//   var value_element = Blockly.Python.valueToCode(
//     block,
//     "element",
//     Blockly.Python.ORDER_ATOMIC
//   );
//   var checkbox_double_click = block.getFieldValue("double_click") == "TRUE";
//   var checkbox_right_click = block.getFieldValue("right_click") == "TRUE";
//   // var value_navigate = Blockly.Python.valueToCode(
//   //   block,
//   //   "navigate",
//   //   Blockly.Python.ORDER_ATOMIC
//   // );
//   // TODO: Assemble Python into code variable.
//   var code = `chrome.mouse_click(${value_user_visible_text_element}, ${value_element}, ${capitalize(
//     checkbox_double_click.toString()
//   )}, ${capitalize(checkbox_right_click.toString())} )\n`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };


Blockly.Blocks["chrome_wait_until"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck("String")
      .appendField("Wait until ||");
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Text", "t"],
          ["Button", "b"],
        ]),
        "element"
      )
      .appendField("appears");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_wait_until"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_element = block.getFieldValue("element");
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.wait_until(${value_text}, "${dropdown_element}")\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_refresh_page"] = {
  init: function () {
    this.appendDummyInput().appendField("Refresh Page");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_refresh_page"] = function (block) {
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.refresh_page()\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_hit_enter"] = {
  init: function () {
    this.appendDummyInput().appendField("Press Enter Key");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_hit_enter"] = function (block) {
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.hit_enter()\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_key_press"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Press Key")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
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
          ["ADD", "helium.ADD"],
          ["ALT", "helium.ALT"],
          ["ARROW_DOWN", "helium.ARROW_DOWN"],
          ["ARROW_LEFT", "helium.ARROW_LEFT"],
          ["ARROW_RIGHT", "helium.ARROW_RIGHT"],
          ["ARROW_UP", "helium.ARROW_UP"],
          ["BACKSPACE", "helium.BACKSPACE"],
          ["BACK_SPACE", "helium.BACK_SPACE"],
          ["CANCEL", "helium.CANCEL"],
          ["CLEAR", "helium.CLEAR"],
          ["COMMAND", "helium.COMMAND"],
          ["CONTROL", "helium.CONTROL"],
          ["DECIMAL", "helium.DECIMAL"],
          ["DELETE", "helium.DELETE"],
          ["DIVIDE", "helium.DIVIDE"],
          ["DOWN", "helium.DOWN"],
          ["END", "helium.END"],
          ["ENTER", "helium.ENTER"],
          ["EQUALS", "helium.EQUALS"],
          ["ESCAPE", "helium.ESCAPE"],
          ["F1", "helium.F1"],
          ["F10", "helium.F10"],
          ["F11", "helium.F11"],
          ["F12", "helium.F12"],
          ["F2", "helium.F2"],
          ["F3", "helium.F3"],
          ["F4", "helium.F4"],
          ["F5", "helium.F5"],
          ["F6", "helium.F6"],
          ["F7", "helium.F7"],
          ["F8", "helium.F8"],
          ["F9", "helium.F9"],
          ["HELP", "helium.HELP"],
          ["HOME", "helium.HOME"],
          ["INSERT", "helium.INSERT"],
          ["LEFT", "helium.LEFT"],
          ["LEFT_ALT", "helium.LEFT_ALT"],
          ["LEFT_CONTROL", "helium.LEFT_CONTROL"],
          ["LEFT_SHIFT", "helium.LEFT_SHIFT"],
          ["META", "helium.META"],
          ["MULTIPLY", "helium.MULTIPLY"],
          ["NULL", "helium.NULL"],
          ["NUMPAD0", "helium.NUMPAD0"],
          ["NUMPAD1", "helium.NUMPAD1"],
          ["NUMPAD2", "helium.NUMPAD2"],
          ["NUMPAD3", "helium.NUMPAD3"],
          ["NUMPAD4", "helium.NUMPAD4"],
          ["NUMPAD5", "helium.NUMPAD5"],
          ["NUMPAD6", "helium.NUMPAD6"],
          ["NUMPAD7", "helium.NUMPAD7"],
          ["NUMPAD8", "helium.NUMPAD8"],
          ["NUMPAD9", "helium.NUMPAD9"],
          ["PAGE_DOWN", "helium.PAGE_DOWN"],
          ["PAGE_UP", "helium.PAGE_UP"],
          ["PAUSE", "helium.PAUSE"],
          ["RETURN", "helium.RETURN"],
          ["RIGHT", "helium.RIGHT"],
          ["SEMICOLON", "helium.SEMICOLON"],
          ["SEPARATOR", "helium.SEPARATOR"],
          ["SHIFT", "helium.SHIFT"],
          ["SPACE", "helium.SPACE"],
          ["SUBTRACT", "helium.SUBTRACT"],
          ["TAB", "helium.TAB"],
          ["UP", "helium.UP"]




        ]),
        "key_1"
      )
      .appendField("+")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
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
          ["ADD", "helium.ADD"],
          ["ALT", "helium.ALT"],
          ["ARROW_DOWN", "helium.ARROW_DOWN"],
          ["ARROW_LEFT", "helium.ARROW_LEFT"],
          ["ARROW_RIGHT", "helium.ARROW_RIGHT"],
          ["ARROW_UP", "helium.ARROW_UP"],
          ["BACKSPACE", "helium.BACKSPACE"],
          ["BACK_SPACE", "helium.BACK_SPACE"],
          ["CANCEL", "helium.CANCEL"],
          ["CLEAR", "helium.CLEAR"],
          ["COMMAND", "helium.COMMAND"],
          ["CONTROL", "helium.CONTROL"],
          ["DECIMAL", "helium.DECIMAL"],
          ["DELETE", "helium.DELETE"],
          ["DIVIDE", "helium.DIVIDE"],
          ["DOWN", "helium.DOWN"],
          ["END", "helium.END"],
          ["ENTER", "helium.ENTER"],
          ["EQUALS", "helium.EQUALS"],
          ["ESCAPE", "helium.ESCAPE"],
          ["F1", "helium.F1"],
          ["F10", "helium.F10"],
          ["F11", "helium.F11"],
          ["F12", "helium.F12"],
          ["F2", "helium.F2"],
          ["F3", "helium.F3"],
          ["F4", "helium.F4"],
          ["F5", "helium.F5"],
          ["F6", "helium.F6"],
          ["F7", "helium.F7"],
          ["F8", "helium.F8"],
          ["F9", "helium.F9"],
          ["HELP", "helium.HELP"],
          ["HOME", "helium.HOME"],
          ["INSERT", "helium.INSERT"],
          ["LEFT", "helium.LEFT"],
          ["LEFT_ALT", "helium.LEFT_ALT"],
          ["LEFT_CONTROL", "helium.LEFT_CONTROL"],
          ["LEFT_SHIFT", "helium.LEFT_SHIFT"],
          ["META", "helium.META"],
          ["MULTIPLY", "helium.MULTIPLY"],
          ["NULL", "helium.NULL"],
          ["NUMPAD0", "helium.NUMPAD0"],
          ["NUMPAD1", "helium.NUMPAD1"],
          ["NUMPAD2", "helium.NUMPAD2"],
          ["NUMPAD3", "helium.NUMPAD3"],
          ["NUMPAD4", "helium.NUMPAD4"],
          ["NUMPAD5", "helium.NUMPAD5"],
          ["NUMPAD6", "helium.NUMPAD6"],
          ["NUMPAD7", "helium.NUMPAD7"],
          ["NUMPAD8", "helium.NUMPAD8"],
          ["NUMPAD9", "helium.NUMPAD9"],
          ["PAGE_DOWN", "helium.PAGE_DOWN"],
          ["PAGE_UP", "helium.PAGE_UP"],
          ["PAUSE", "helium.PAUSE"],
          ["RETURN", "helium.RETURN"],
          ["RIGHT", "helium.RIGHT"],
          ["SEMICOLON", "helium.SEMICOLON"],
          ["SEPARATOR", "helium.SEPARATOR"],
          ["SHIFT", "helium.SHIFT"],
          ["SPACE", "helium.SPACE"],
          ["SUBTRACT", "helium.SUBTRACT"],
          ["TAB", "helium.TAB"],
          ["UP", "helium.UP"]
        ]),
        "key_2"
      );
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_key_press"] = function (block) {
  Blockly.Python.definitions_["Helium"] = "import helium";
  var dropdown_key_1 = block.getFieldValue("key_1");
  var dropdown_key_2 = block.getFieldValue("key_2");

  // TODO: Assemble Python into code variable.
  var code = `chrome.key_press(${dropdown_key_1}, ${dropdown_key_2})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_mouse_hover"] = {
  init: function () {
    this.appendValueInput("user_visible_text_element")
      .setCheck("String")
      .appendField("Hover on Text ||");
    this.appendValueInput("element")
      .setCheck("String")
      .appendField("or Element ||");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_mouse_hover"] = function (block) {
  var value_user_visible_text_element = Blockly.Python.valueToCode(
    block,
    "user_visible_text_element",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_element = Blockly.Python.valueToCode(
    block,
    "element",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.mouse_hover(${value_user_visible_text_element}, ${value_element})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_set_waiting_time"] = {
  init: function () {
    this.appendValueInput("element")
      .setCheck("Number")
      .appendField("Set waiting time ||");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_set_waiting_time"] = function (block) {
  var value_element = Blockly.Python.valueToCode(
    block,
    "element",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.set_waiting_time(${value_element})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_scroll"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Scroll the page ||")
      .appendField(
        new Blockly.FieldDropdown([
          ["Down side", "down"],
          ["Up side", "up"],
          ["Left side", "left"],
          ["Right side", "right"],
        ]),
        "direction"
      )
      .appendField(new Blockly.FieldNumber(300, 1, Infinity, 1), "weight")
      .appendField(" pixels");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_scroll"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var number_weight = block.getFieldValue("weight");
  var value_navigate = Blockly.Python.valueToCode(
    block,
    "navigate",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.scroll("${dropdown_direction}", ${number_weight})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["get_text"] = {
  init: function () {
    this.appendValueInput("get_element_image")
      .setCheck(null)
      .appendField("Get Text |")
      .appendField("Element XPath");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["get_element_image"] = {
  init: function () {
    this.appendValueInput("get_element_image")
      .setCheck(null)
      .appendField("Get Image |")
      .appendField("Element XPath");
    this.appendValueInput("image_name")
      .setCheck(null)
      .appendField("Image Name");
    this.appendDummyInput()
      .appendField("Base64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "base64_image");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Blockly.Blocks["find_element"] = {
//   init: function () {
//     this.appendValueInput("get_element_image")
//       .setCheck(null)
//       .appendField("Find Element|")
//       .appendField("Element XPath");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour("#611BD1");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };
{/* <block type="status_data">
  <value name="status_variable">
    <block type="variables_get">
      <field name="VAR" id="EV/Gw}Bxj$#rCpn4Gcgm">status</field>
    </block>
  </value>
  <value name="data_variable">
    <block type="variables_get">
      <field name="VAR" id="JX.gp1:Ba,fFfG1*k?7N">element</field>
    </block>
  </value>
  <value name="function_variable">
    <block type="find_element">
      <value name="get_element_image">
        <block type="text">
          <field name="TEXT"></field>
        </block>
      </value>
    </block>
  </value>
</block> */}

Blockly.Python["get_text"] = function (block) {
  var value_get_element_image = Blockly.Python.valueToCode(
    block,
    "get_element_image",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `chrome.get_text(element_xpath=${value_get_element_image})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["get_element_image"] = function (block) {
  var value_get_element_image = Blockly.Python.valueToCode(
    block,
    "get_element_image",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_image_name = Blockly.Python.valueToCode(
    block,
    "image_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var checkbox_base64_image = block.getFieldValue("base64_image") === "TRUE";
  // TODO: Assemble Python into code variable.
  var code = `chrome.get_element_image(element_xpath=${value_get_element_image}, image_name=${value_image_name}, base64_image=${capitalize(
    checkbox_base64_image.toString()
  )})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Python["find_element"] = function (block) {
//   var value_get_element_image = Blockly.Python.valueToCode(
//     block,
//     "get_element_image",
//     Blockly.Python.ORDER_ATOMIC
//   );
//   // TODO: Assemble Python into code variable.
//   var code = `chrome.find_element(element_xpath=${value_get_element_image})\n`;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };
