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
    /// Хранилище данных
    ///о метеостанции.
    /// </summary>
    // *** Start programmer edit section *** (Xran CustomAttributes)

    // *** End programmer edit section *** (Xran CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("XranE", new string[] {
            "МетеостанцияID as \'Метеостанция ID\'",
            "Настройки as \'Настройки\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Данные as \'Данные\'",
            "meteo.City"})]
    [View("XranL", new string[] {
            "IDИдентификатор",
            "Данные",
            "МетеостанцияID",
            "Настройки",
            "meteo.City.Название"})]
    public class Xran : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDИдентификатор;
        
        private string fНастройки;
        
        private string fДанные;
        
        private int fМетеостанцияID;
        
        private IIS.Muxagot3.meteo fmeteo;
        
        // *** Start programmer edit section *** (Xran CustomMembers)

        // *** End programmer edit section *** (Xran CustomMembers)

        
        /// <summary>
        /// IDИдентификатор.
        /// </summary>
        // *** Start programmer edit section *** (Xran.IDИдентификатор CustomAttributes)

        // *** End programmer edit section *** (Xran.IDИдентификатор CustomAttributes)
        public virtual int IDИдентификатор
        {
            get
            {
                // *** Start programmer edit section *** (Xran.IDИдентификатор Get start)

                // *** End programmer edit section *** (Xran.IDИдентификатор Get start)
                int result = this.fIDИдентификатор;
                // *** Start programmer edit section *** (Xran.IDИдентификатор Get end)

                // *** End programmer edit section *** (Xran.IDИдентификатор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Xran.IDИдентификатор Set start)

                // *** End programmer edit section *** (Xran.IDИдентификатор Set start)
                this.fIDИдентификатор = value;
                // *** Start programmer edit section *** (Xran.IDИдентификатор Set end)

                // *** End programmer edit section *** (Xran.IDИдентификатор Set end)
            }
        }
        
        /// <summary>
        /// Данные.
        /// </summary>
        // *** Start programmer edit section *** (Xran.Данные CustomAttributes)

        // *** End programmer edit section *** (Xran.Данные CustomAttributes)
        [StrLen(255)]
        public virtual string Данные
        {
            get
            {
                // *** Start programmer edit section *** (Xran.Данные Get start)

                // *** End programmer edit section *** (Xran.Данные Get start)
                string result = this.fДанные;
                // *** Start programmer edit section *** (Xran.Данные Get end)

                // *** End programmer edit section *** (Xran.Данные Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Xran.Данные Set start)

                // *** End programmer edit section *** (Xran.Данные Set start)
                this.fДанные = value;
                // *** Start programmer edit section *** (Xran.Данные Set end)

                // *** End programmer edit section *** (Xran.Данные Set end)
            }
        }
        
        /// <summary>
        /// МетеостанцияID.
        /// </summary>
        // *** Start programmer edit section *** (Xran.МетеостанцияID CustomAttributes)

        // *** End programmer edit section *** (Xran.МетеостанцияID CustomAttributes)
        public virtual int МетеостанцияID
        {
            get
            {
                // *** Start programmer edit section *** (Xran.МетеостанцияID Get start)

                // *** End programmer edit section *** (Xran.МетеостанцияID Get start)
                int result = this.fМетеостанцияID;
                // *** Start programmer edit section *** (Xran.МетеостанцияID Get end)

                // *** End programmer edit section *** (Xran.МетеостанцияID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Xran.МетеостанцияID Set start)

                // *** End programmer edit section *** (Xran.МетеостанцияID Set start)
                this.fМетеостанцияID = value;
                // *** Start programmer edit section *** (Xran.МетеостанцияID Set end)

                // *** End programmer edit section *** (Xran.МетеостанцияID Set end)
            }
        }
        
        /// <summary>
        /// Настройки.
        /// </summary>
        // *** Start programmer edit section *** (Xran.Настройки CustomAttributes)

        // *** End programmer edit section *** (Xran.Настройки CustomAttributes)
        [StrLen(255)]
        public virtual string Настройки
        {
            get
            {
                // *** Start programmer edit section *** (Xran.Настройки Get start)

                // *** End programmer edit section *** (Xran.Настройки Get start)
                string result = this.fНастройки;
                // *** Start programmer edit section *** (Xran.Настройки Get end)

                // *** End programmer edit section *** (Xran.Настройки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Xran.Настройки Set start)

                // *** End programmer edit section *** (Xran.Настройки Set start)
                this.fНастройки = value;
                // *** Start programmer edit section *** (Xran.Настройки Set end)

                // *** End programmer edit section *** (Xran.Настройки Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Muxagot3.meteo.
        /// </summary>
        // *** Start programmer edit section *** (Xran.meteo CustomAttributes)

        // *** End programmer edit section *** (Xran.meteo CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "meteo"})]
        public virtual IIS.Muxagot3.meteo meteo
        {
            get
            {
                // *** Start programmer edit section *** (Xran.meteo Get start)

                // *** End programmer edit section *** (Xran.meteo Get start)
                IIS.Muxagot3.meteo result = this.fmeteo;
                // *** Start programmer edit section *** (Xran.meteo Get end)

                // *** End programmer edit section *** (Xran.meteo Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Xran.meteo Set start)

                // *** End programmer edit section *** (Xran.meteo Set start)
                this.fmeteo = value;
                // *** Start programmer edit section *** (Xran.meteo Set end)

                // *** End programmer edit section *** (Xran.meteo Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "XranE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View XranE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("XranE", typeof(IIS.Muxagot3.Xran));
                }
            }
            
            /// <summary>
            /// "XranL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View XranL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("XranL", typeof(IIS.Muxagot3.Xran));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Xran.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfXran CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfXran CustomAttributes)
    public class DetailArrayOfXran : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Muxagot3.DetailArrayOfXran members)

        // *** End programmer edit section *** (IIS.Muxagot3.DetailArrayOfXran members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Xran by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Xran.
        /// </summary>
        public DetailArrayOfXran(IIS.Muxagot3.meteo fmeteo) : 
                base(typeof(Xran), ((ICSSoft.STORMNET.DataObject)(fmeteo)))
        {
        }
        
        public IIS.Muxagot3.Xran this[int index]
        {
            get
            {
                return ((IIS.Muxagot3.Xran)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Muxagot3.Xran dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
