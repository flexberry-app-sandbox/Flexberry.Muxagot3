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
    /// Здание.
    /// </summary>
    // *** Start programmer edit section *** (home CustomAttributes)

    // *** End programmer edit section *** (home CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("homeE", new string[] {
            "Адрес as \'Адрес\'",
            "Долгота as \'Долгота\'",
            "Широта as \'Широта\'"})]
    [View("homeL", new string[] {
            "Адрес as \'Адрес\'",
            "Долгота as \'Долгота\'",
            "Широта as \'Широта\'",
            "City"})]
    [View("ЗданиеE", new string[] {
            "Адрес as \'Адрес\'",
            "Долгота as \'Долгота\'",
            "Широта as \'Широта\'"})]
    [View("ЗданиеL", new string[] {
            "Адрес as \'Адрес\'",
            "Долгота as \'Долгота\'",
            "Широта as \'Широта\'",
            "City"})]
    public class home : ICSSoft.STORMNET.DataObject
    {
        
        private string fИмя;
        
        private string fАдрес;
        
        private double fДолгота;
        
        private double fШирота;
        
        private IIS.Muxagot3.City fCity;
        
        // *** Start programmer edit section *** (home CustomMembers)

        // *** End programmer edit section *** (home CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (home.Адрес CustomAttributes)

        // *** End programmer edit section *** (home.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (home.Адрес Get start)

                // *** End programmer edit section *** (home.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (home.Адрес Get end)

                // *** End programmer edit section *** (home.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Адрес Set start)

                // *** End programmer edit section *** (home.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (home.Адрес Set end)

                // *** End programmer edit section *** (home.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Долгота.
        /// </summary>
        // *** Start programmer edit section *** (home.Долгота CustomAttributes)

        // *** End programmer edit section *** (home.Долгота CustomAttributes)
        public virtual double Долгота
        {
            get
            {
                // *** Start programmer edit section *** (home.Долгота Get start)

                // *** End programmer edit section *** (home.Долгота Get start)
                double result = this.fДолгота;
                // *** Start programmer edit section *** (home.Долгота Get end)

                // *** End programmer edit section *** (home.Долгота Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Долгота Set start)

                // *** End programmer edit section *** (home.Долгота Set start)
                this.fДолгота = value;
                // *** Start programmer edit section *** (home.Долгота Set end)

                // *** End programmer edit section *** (home.Долгота Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (home.Имя CustomAttributes)

        // *** End programmer edit section *** (home.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (home.Имя Get start)

                // *** End programmer edit section *** (home.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (home.Имя Get end)

                // *** End programmer edit section *** (home.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Имя Set start)

                // *** End programmer edit section *** (home.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (home.Имя Set end)

                // *** End programmer edit section *** (home.Имя Set end)
            }
        }
        
        /// <summary>
        /// Широта.
        /// </summary>
        // *** Start programmer edit section *** (home.Широта CustomAttributes)

        // *** End programmer edit section *** (home.Широта CustomAttributes)
        public virtual double Широта
        {
            get
            {
                // *** Start programmer edit section *** (home.Широта Get start)

                // *** End programmer edit section *** (home.Широта Get start)
                double result = this.fШирота;
                // *** Start programmer edit section *** (home.Широта Get end)

                // *** End programmer edit section *** (home.Широта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.Широта Set start)

                // *** End programmer edit section *** (home.Широта Set start)
                this.fШирота = value;
                // *** Start programmer edit section *** (home.Широта Set end)

                // *** End programmer edit section *** (home.Широта Set end)
            }
        }
        
        /// <summary>
        /// Здание.
        /// </summary>
        // *** Start programmer edit section *** (home.City CustomAttributes)

        // *** End programmer edit section *** (home.City CustomAttributes)
        [PropertyStorage(new string[] {
                "City"})]
        [NotNull()]
        public virtual IIS.Muxagot3.City City
        {
            get
            {
                // *** Start programmer edit section *** (home.City Get start)

                // *** End programmer edit section *** (home.City Get start)
                IIS.Muxagot3.City result = this.fCity;
                // *** Start programmer edit section *** (home.City Get end)

                // *** End programmer edit section *** (home.City Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (home.City Set start)

                // *** End programmer edit section *** (home.City Set start)
                this.fCity = value;
                // *** Start programmer edit section *** (home.City Set end)

                // *** End programmer edit section *** (home.City Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "homeE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View homeE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("homeE", typeof(IIS.Muxagot3.home));
                }
            }
            
            /// <summary>
            /// "homeL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View homeL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("homeL", typeof(IIS.Muxagot3.home));
                }
            }
            
            /// <summary>
            /// "ЗданиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеE", typeof(IIS.Muxagot3.home));
                }
            }
            
            /// <summary>
            /// "ЗданиеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеL", typeof(IIS.Muxagot3.home));
                }
            }
        }
    }
}
