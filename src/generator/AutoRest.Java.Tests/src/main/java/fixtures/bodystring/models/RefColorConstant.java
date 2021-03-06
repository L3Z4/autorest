/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package fixtures.bodystring.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The RefColorConstant model.
 */
public class RefColorConstant {
    /**
     * Referenced Color Constant Description.
     */
    @JsonProperty(value = "ColorConstant", required = true)
    private String colorConstant;

    /**
     * Sample string.
     */
    private String field1;

    /**
     * Creates an instance of RefColorConstant class.
     */
    public RefColorConstant() {
        colorConstant = "green-color";
    }

    /**
     * Get the colorConstant value.
     *
     * @return the colorConstant value
     */
    public String colorConstant() {
        return this.colorConstant;
    }

    /**
     * Set the colorConstant value.
     *
     * @param colorConstant the colorConstant value to set
     * @return the RefColorConstant object itself.
     */
    public RefColorConstant withColorConstant(String colorConstant) {
        this.colorConstant = colorConstant;
        return this;
    }

    /**
     * Get the field1 value.
     *
     * @return the field1 value
     */
    public String field1() {
        return this.field1;
    }

    /**
     * Set the field1 value.
     *
     * @param field1 the field1 value to set
     * @return the RefColorConstant object itself.
     */
    public RefColorConstant withField1(String field1) {
        this.field1 = field1;
        return this;
    }

}
