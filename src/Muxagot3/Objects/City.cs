﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Muxagot3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Город.
    /// </summary>
    // *** Start programmer edit section *** (City CustomAttributes)

    // *** End programmer edit section *** (City CustomAttributes)
    [AutoAltered()]
    [Caption("Город")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("CityE", new string[] {
            "Название as \'Название\'",
            "Широта as \'Широта\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'"})]
    [View("CityL", new string[] {
            "Название as \'Название\'",
            "Широта as \'Широта\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'"})]
    [View("ГородE", new string[] {
            "Название as \'Название\'",
            "Широта as \'Широта\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'"})]
    [View("ГородL", new string[] {
            "Название as \'Название\'",
            "Широта as \'Широта\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'"})]
    public class City : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        private double fШирота;
        
        private int fIDИдентификатор;
        
        private double fДолгота;
        
        // *** Start programmer edit section *** (City CustomMembers)

        // *** End programmer edit section *** (City CustomMembers)

        
        /// <summary>
        /// IDИдентификатор.
        /// </summary>
        // *** Start programmer edit section *** (City.IDИдентификатор CustomAttributes)

        // *** End programmer edit section *** (City.IDИдентификатор CustomAttributes)
        public virtual int IDИдентификатор
        {
            get
            {
                // *** Start programmer edit section *** (City.IDИдентификатор Get start)

                // *** End programmer edit section *** (City.IDИдентификатор Get start)
                int result = this.fIDИдентификатор;
                // *** Start programmer edit section *** (City.IDИдентификатор Get end)

                // *** End programmer edit section *** (City.IDИдентификатор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (City.IDИдентификатор Set start)

                // *** End programmer edit section *** (City.IDИдентификатор Set start)
                this.fIDИдентификатор = value;
                // *** Start programmer edit section *** (City.IDИдентификатор Set end)

                // *** End programmer edit section *** (City.IDИдентификатор Set end)
            }
        }
        
        /// <summary>
        /// Долгота.
        /// </summary>
        // *** Start programmer edit section *** (City.Долгота CustomAttributes)

        // *** End programmer edit section *** (City.Долгота CustomAttributes)
        public virtual double Долгота
        {
            get
            {
                // *** Start programmer edit section *** (City.Долгота Get start)

                // *** End programmer edit section *** (City.Долгота Get start)
                double result = this.fДолгота;
                // *** Start programmer edit section *** (City.Долгота Get end)

                // *** End programmer edit section *** (City.Долгота Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (City.Долгота Set start)

                // *** End programmer edit section *** (City.Долгота Set start)
                this.fДолгота = value;
                // *** Start programmer edit section *** (City.Долгота Set end)

                // *** End programmer edit section *** (City.Долгота Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (City.Название CustomAttributes)

        // *** End programmer edit section *** (City.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (City.Название Get start)

                // *** End programmer edit section *** (City.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (City.Название Get end)

                // *** End programmer edit section *** (City.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (City.Название Set start)

                // *** End programmer edit section *** (City.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (City.Название Set end)

                // *** End programmer edit section *** (City.Название Set end)
            }
        }
        
        /// <summary>
        /// Широта.
        /// </summary>
        // *** Start programmer edit section *** (City.Широта CustomAttributes)

        // *** End programmer edit section *** (City.Широта CustomAttributes)
        public virtual double Широта
        {
            get
            {
                // *** Start programmer edit section *** (City.Широта Get start)

                // *** End programmer edit section *** (City.Широта Get start)
                double result = this.fШирота;
                // *** Start programmer edit section *** (City.Широта Get end)

                // *** End programmer edit section *** (City.Широта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (City.Широта Set start)

                // *** End programmer edit section *** (City.Широта Set start)
                this.fШирота = value;
                // *** Start programmer edit section *** (City.Широта Set end)

                // *** End programmer edit section *** (City.Широта Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "CityE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CityE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CityE", typeof(IIS.Muxagot3.City));
                }
            }
            
            /// <summary>
            /// "CityL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CityL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CityL", typeof(IIS.Muxagot3.City));
                }
            }
            
            /// <summary>
            /// "ГородE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородE", typeof(IIS.Muxagot3.City));
                }
            }
            
            /// <summary>
            /// "ГородL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГородL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГородL", typeof(IIS.Muxagot3.City));
                }
            }
        }
    }
}
