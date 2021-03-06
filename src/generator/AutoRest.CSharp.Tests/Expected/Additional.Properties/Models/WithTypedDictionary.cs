// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
// 
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace Fixtures.AdditionalProperties.Models
{
    using System.Linq;

    public partial class WithTypedDictionary
    {
        /// <summary>
        /// Initializes a new instance of the WithTypedDictionary class.
        /// </summary>
        public WithTypedDictionary() { }

        /// <summary>
        /// Initializes a new instance of the WithTypedDictionary class.
        /// </summary>
        /// <param name="additionalProperties">Unmatched properties from the
        /// message are deserialized this collection</param>
        public WithTypedDictionary(System.Collections.Generic.IDictionary<string, Feature> additionalProperties = default(System.Collections.Generic.IDictionary<string, Feature>), string abc = default(string))
        {
            AdditionalProperties = additionalProperties;
            Abc = abc;
        }

        /// <summary>
        /// Gets or sets unmatched properties from the message are deserialized
        /// this collection
        /// </summary>
        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, Feature> AdditionalProperties { get; set; }

        /// <summary>
        /// </summary>
        [Newtonsoft.Json.JsonProperty(PropertyName = "abc")]
        public string Abc { get; set; }

    }
}
